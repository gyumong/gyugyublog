import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";
import { useRouter } from "next/router";
import PostLayout from "@/components/Layout/PostLayout";
import MainLayout from "@/components/Layout/MainLayout";
import Logo from "./public/g-log.svg";
import { useTheme } from "next-themes";
import { useConfig } from "nextra-theme-docs";

const themeConfig: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const title = frontMatter.title || "G.Log";
    const description = frontMatter.description || "The next site builder";
    const image = frontMatter.image || "/assets/profile.png";
    const url = `https://gyumong.info${asPath}`;

    if (asPath === "/daily/dnd-hackathon-reivews") {
      return {
        titleTemplate: "%s - G.Log",
        openGraph: {
          type: "website",
          locale: "ko",
          url,
          site_name: "G.Log",
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        },
      };
    }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - G.Log",
        openGraph: {
          type: "website",
          locale: "ko",
          url,
          site_name: "G.Log",
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        },
      };
    }
    return {
      title: "G.Log",
      titleTemplate: "%s",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = `https://gyumong.info${defaultLocale === locale ? asPath : `/${locale}${asPath}`}`;
    const title = frontMatter.title || "G.Log";
    const description = frontMatter.description || "The next site builder";
    const image = frontMatter.image || "/assets/profile.png";

    return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <title>{title}</title>
          <meta name="description" content={description} />
        </>
    );
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
    const { theme } = useTheme();
    return <Logo className={theme === "dark" ? "fill-white" : "fill-black"} />;
  },
  main: ({ children }) => {
    const { asPath } = useRouter();
    if (asPath.startsWith("/daily")) {
      return <PostLayout>{children}</PostLayout>;
    }
    return <MainLayout>{children}</MainLayout>;
  },
  footer: {
    text: (
        <span>
        © {new Date().getFullYear()}{" "}
          <a href="https://gyumong.info" target="_blank">
          Gyumong.Info
        </a>
      </span>
    ),
  },
};

export default themeConfig;
