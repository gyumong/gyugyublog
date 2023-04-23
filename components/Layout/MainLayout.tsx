import { FC, ReactNode } from "react";
import Image from "next/image";
import { Card } from "nextra-theme-docs";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="flex gap-10 sm:gap-6 justify-center sm:flex-col pt-32 pb-24  sm:items-start sm:pt-10 sm:pb-4">
        <div className="rounded-full border-4 border-gray-300 w-[100px] h-[100px] relative object-cover overflow-hidden">
          <Image
            src="/assets/profile.png"
            alt="profile"
            fill
            sizes="200w"
            priority
          />
        </div>
        <div>
          <p className="nx-text-2xl mb-2">김민규</p>
          <p>
            성장을 추구하는 개발자 김민규입니다.
            <br />
            React와 TypeScript를 주력으로 사용합니다.
          </p>
        </div>
      </header>
      {children}
    </>
  );
};

export default MainLayout;
