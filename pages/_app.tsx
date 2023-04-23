import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { useUserEventLogger } from "@/hooks/useUserEventLogger";
export default function App({ Component, pageProps }: AppProps) {
  useUserEventLogger();
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
