import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";
import { useRouter } from "next/router";
import PostLayout from "@/components/Layout/PostLayout";
import MainLayout from "@/components/Layout/MainLayout";
import Logo from "./public/g-log.svg";
const themeConfig: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Gyumong.dev",
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
    placeholder: "찾고싶은 글을 입력하세요",
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    content: null,
  },
  themeSwitch: {
    component: <ThemeSwitch lite />,
    useOptions() {
      return {
        dark: "Dark",
        light: "Light",
        system: "System",
      };
    },
  },
  logo: <Logo />,
  main: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath } = useRouter();
    if (asPath === "/") {
      return MainLayout({ children });
    }
    return PostLayout({ children });
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
