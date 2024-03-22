import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { useUserEventLogger } from "@/hooks/useUserEventLogger";
import Script from "next/script";
import { excapeInAppBrowser } from "@/utils/excapeInAppBrowser";
export default function App({ Component, pageProps }: AppProps) {
  const tragetUrl = "https://www.gyumong.info";
  excapeInAppBrowser(tragetUrl);

  useUserEventLogger();
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <>
      <DefaultSeo {...SEO} />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
