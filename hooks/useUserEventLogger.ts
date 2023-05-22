import { useEffect } from "react";
import { useRouter } from "next/router";
import { isInstagramInAppBrowser } from "@/utils/userAgent";

export const useUserEventLogger = () => {
  const router = useRouter();
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const pageview = (url: string) => {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const handleRouteChange = (url: string) => {
      if (typeof window !== undefined) {
        if (!isInstagramInAppBrowser(userAgent)) {
          pageview(url);
        }
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
