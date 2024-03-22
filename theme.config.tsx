import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";
import { useRouter } from "next/router";
import PostLayout from "@/components/Layout/PostLayout";
import MainLayout from "@/components/Layout/MainLayout";
import Logo from "./public/g-log.svg";
import { useTheme } from "next-themes";
const themeConfig: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - G.Log",
        openGraph: {
          type: "website",
          locale: "ko",
          url: "https://gyumong.info",
          site_name: "G.Log",
          images: [
            {
              url: "asesets/profile.png",
              width: 800,
              height: 600,
              alt: "개발자 김민규",
            },
          ],
        },
      };
    }
    return {
      title: "G.Log",
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
  logo: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme } = useTheme();
    return <Logo className={theme === "dark" ? "fill-white" : "fill-black"} />;
  },
  main: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath } = useRouter();
    if(asPath === "/daily"){
      return PostLayout({ children });
    }
      return MainLayout({ children });
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} ©{" "}
        <a href="https://gyumong.info" target="_blank">
          Gyumong.Info
        </a>
      </span>
    ),
  },
};

export default themeConfig;
