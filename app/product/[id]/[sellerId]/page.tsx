import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

interface Props {
  params: Promise<{ id: string; sellerId: string }>;
}

async function fetchProduct(id: string) {
  const { data: product } = await supabase
    .from('seller_products')
    .select('id, name, description, seller_id, sellers(business_name, city)')
    .eq('id', id)
    .single();

  if (!product) return null;

  const { data: images } = await supabase
    .from('seller_product_images')
    .select('image_url, sort_order')
    .eq('product_id', id)
    .order('sort_order', { ascending: true })
    .limit(1);

  const seller = Array.isArray(product.sellers) ? product.sellers[0] : (product.sellers as { business_name: string; city: string | null } | null);
  const sellerName = seller?.business_name ?? null;
  const sellerCity = seller?.city ?? null;

  return { ...product, imageUrl: images?.[0]?.image_url ?? null, sellerName, sellerCity };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, sellerId } = await params;
  const product = await fetchProduct(id);
  if (!product) return { title: 'Kitchnly' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const pageUrl = `${siteUrl}/product/${id}/${sellerId}`;

  const sellerLine = [product.sellerName, product.sellerCity].filter(Boolean).join(' · ');
  const parts = [sellerLine || null, product.description].filter(Boolean);
  const description = parts.length > 0 ? parts.join(' · ') : null;

  return {
    title: `${product.name} | Kitchnly`,
    ...(description ? { description } : {}),
    openGraph: {
      title: product.name,
      ...(description ? { description } : {}),
      url: pageUrl,
      siteName: 'Kitchnly',
      images: product.imageUrl ? [{ url: product.imageUrl, width: 1200, height: 630 }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      ...(description ? { description } : {}),
      images: product.imageUrl ? [product.imageUrl] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id, sellerId } = await params;
  const product = await fetchProduct(id);
  if (!product) notFound();

  return (
    <DeepLinkRedirect
      deepLink={`kitchnly://product/${id}/${sellerId}`}
      title={product.name}
      imageUrl={product.imageUrl ?? undefined}
    />
  );
}
