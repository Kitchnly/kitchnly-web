import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

interface Props {
  params: Promise<{ id: string }>;
}

function extractCity(locationLabel: string | null): string | null {
  if (!locationLabel) return null;
  const parts = locationLabel.split(',').map(p => p.trim()).filter(Boolean);
  // Nominatim format: "Street, City, Province, PostalCode, Canada"
  // Skip last part (Canada) and second-to-last (province/postal), take what's before
  const filtered = parts.filter(p => !/^canada$/i.test(p) && !/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i.test(p));
  return filtered.length >= 2 ? filtered[filtered.length - 2] : filtered[0] ?? null;
}

async function fetchSeller(id: string) {
  const { data: seller } = await supabase
    .from('sellers')
    .select('id, business_name, bio, profile_image_url, rating, total_reviews, city, location_label')
    .eq('id', id)
    .single();

  return seller ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const seller = await fetchSeller(id);
  if (!seller) return { title: 'Kitchnly' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const pageUrl = `${siteUrl}/seller/${id}`;

  const reviewCount = seller.total_reviews ?? 0;
  let statsStr = '';
  if (seller.rating != null && reviewCount > 0) {
    statsStr = ` · ${reviewCount} review${reviewCount === 1 ? '' : 's'}        ★ ${seller.rating}`;
  } else if (seller.rating != null) {
    statsStr = ` · ★ ${seller.rating}`;
  } else if (reviewCount > 0) {
    statsStr = ` · ${reviewCount} review${reviewCount === 1 ? '' : 's'}`;
  }

  const city = seller.city || extractCity(seller.location_label);
  const locationStr = city ? ` · ${city}` : '';
  const description = `${seller.business_name}${statsStr}${locationStr}`;

  return {
    title: `${seller.business_name} | Kitchnly`,
    description,
    openGraph: {
      title: seller.business_name,
      description,
      url: pageUrl,
      siteName: 'Kitchnly',
      images: seller.profile_image_url
        ? [{ url: seller.profile_image_url, width: 400, height: 400 }]
        : [],
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title: seller.business_name,
      description,
      images: seller.profile_image_url ? [seller.profile_image_url] : [],
    },
  };
}

export default async function SellerPage({ params }: Props) {
  const { id } = await params;
  const seller = await fetchSeller(id);
  if (!seller) notFound();

  return (
    <DeepLinkRedirect
      deepLink={`kitchnly://seller/${id}`}
      title={seller.business_name}
      imageUrl={seller.profile_image_url ?? undefined}
    />
  );
}
