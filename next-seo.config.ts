import { NextSeoProps } from "next-seo";

const config: NextSeoProps = {
  openGraph: {
    type: "website",
    title: "G.Log",
    description: "김민규의 개발자아 블로그입니다.",
    locale: "ko_KR",
    url: "https://www.gyumong.info/",
    siteName: "G.Log",
    images: [
      {
        url: "/assets/profile.png",
        width: 800,
        height: 600,
        alt: "개발자 김민규",
      },
    ],
  },
};

export default config;
