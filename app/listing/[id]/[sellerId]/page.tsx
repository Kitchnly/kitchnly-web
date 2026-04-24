import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

interface Props {
  params: Promise<{ id: string; sellerId: string }>;
}

async function fetchListing(id: string) {
  const { data: listing } = await supabase
    .from('seller_listings')
    .select('id, title, description, price, seller_id')
    .eq('id', id)
    .single();

  if (!listing) return null;

  const { data: images } = await supabase
    .from('listing_images')
    .select('image_url, sort_order')
    .eq('listing_id', id)
    .order('sort_order', { ascending: true })
    .limit(1);

  return { ...listing, imageUrl: images?.[0]?.image_url ?? null };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, sellerId } = await params;
  const listing = await fetchListing(id);
  if (!listing) return { title: 'Kitchnly' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const pageUrl = `${siteUrl}/listing/${id}/${sellerId}`;
  const priceStr = listing.price != null ? ` — $${listing.price}` : '';
  const description = listing.description ?? 'Discover this listing on Kitchnly.';

  return {
    title: `${listing.title}${priceStr} | Kitchnly`,
    description,
    openGraph: {
      title: `${listing.title}${priceStr}`,
      description,
      url: pageUrl,
      siteName: 'Kitchnly',
      images: listing.imageUrl ? [{ url: listing.imageUrl, width: 1200, height: 630 }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${listing.title}${priceStr}`,
      description,
      images: listing.imageUrl ? [listing.imageUrl] : [],
    },
  };
}

export default async function ListingPage({ params }: Props) {
  const { id, sellerId } = await params;
  const listing = await fetchListing(id);
  if (!listing) notFound();

  return (
    <DeepLinkRedirect
      deepLink={`kitchnly://listing/${id}/${sellerId}`}
      title={listing.title}
      imageUrl={listing.imageUrl ?? undefined}
    />
  );
}
