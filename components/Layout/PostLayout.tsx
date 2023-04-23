import { FC, ReactNode } from "react";
import Header from "@/components/Header";

type Props = {
  children: ReactNode;
};

const PostLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PostLayout;
