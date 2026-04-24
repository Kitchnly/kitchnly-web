'use client';

import { useEffect } from 'react';

interface Props {
  deepLink: string;
  title: string;
  imageUrl?: string;
}

export default function DeepLinkRedirect({ deepLink, title, imageUrl }: Props) {
  const iosUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL;
  const androidUrl = process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE_URL;

  useEffect(() => {
    window.location.href = deepLink;

    const timer = setTimeout(() => {
      const isAndroid = /android/i.test(navigator.userAgent);
      const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

      if (isAndroid && androidUrl) {
        window.location.href = androidUrl;
      } else if (isIOS && iosUrl) {
        window.location.href = iosUrl;
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [deepLink, iosUrl, androidUrl]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-sm w-full flex flex-col items-center gap-5">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-32 h-32 object-cover rounded-2xl shadow-md"
          />
        )}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-1 text-sm text-gray-500">Opening Kitchnly…</p>
        </div>
        <div className="flex gap-4 mt-2">
          {iosUrl && (
            <a href={iosUrl} className="text-sm font-medium text-orange-600 underline underline-offset-2">
              App Store
            </a>
          )}
          {androidUrl && (
            <a href={androidUrl} className="text-sm font-medium text-orange-600 underline underline-offset-2">
              Google Play
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
