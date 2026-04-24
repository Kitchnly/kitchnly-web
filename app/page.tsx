import { redirect } from 'next/navigation';

export default function RootPage() {
  const iosUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL;
  if (iosUrl) redirect(iosUrl);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Kitchnly</h1>
        <p className="mt-2 text-gray-500">Discover local food makers near you.</p>
      </div>
    </div>
  );
}
