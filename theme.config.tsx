import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const themeConfig: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        title: "Gyumong.dev",
        titleTemplate: "%s - Gyumong.dev",
        description: "안녕하세요. 개발자 김민규입니다.",
        openGraph: {
          type: "website",
          locale: "ko",
          url: "https://gyumong.dev",
          site_name: "Gyumong.dev",
        },
      };
    }
    return {
      title: "Gyumong.dev",
      titileTemplate: "%s",
    };
  },
  head: () => {
    return null;
  },
  toc: {
    title: "On this page",
  },
  search: {
    placeholder: "Search",
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} ©{" "}
        <a href="https://gyumong.dev" target="_blank">
          Gyumong.dev
        </a>
      </span>
    ),
  },
};

export default themeConfig;
