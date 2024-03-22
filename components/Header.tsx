import { ReactNode } from "react";
import { format, parseISO } from "date-fns";
import { useConfig } from "nextra-theme-docs";
const Header = () => {
  const { frontMatter } = useConfig();
  return (
    <>
      <header className="flex flex-col items-center pt-32 pb-24 gap-10 sm:items-start sm:pt-10 sm:pb-8 sm:gap-4">
        <h1 className="text-4xl text-gray-950 dark:text-white">
          {frontMatter.title}
        </h1>
        <time
          dateTime={frontMatter.date}
          className="text-sm text-slate-600 dark:text-slate-200"
        >
          {/*{format(parseISO(frontMatter.date), "yyyy년 MM월 dd일")}*/}
        </time>
      </header>
    </>
  );
};
export default Header;
