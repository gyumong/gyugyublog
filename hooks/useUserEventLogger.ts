import { useEffect } from "react";
import { useRouter } from "next/router";

export const useUserEventLogger = () => {
  const router = useRouter();
  const pageview = (url: string) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "", {
      page_path: url,
    });
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
