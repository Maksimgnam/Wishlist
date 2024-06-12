import Menu from "@/components/Menu";
import { FC, ReactNode } from "react";



interface HomeLayoutProps {
  children: ReactNode;
  params: {
    id: any;
    uid: any;
  };
}

const HomeLayout: FC<HomeLayoutProps> = ({ children, params }) => {
  return (
    <main className="w-full h-svh flex">
      <Menu params={params} />
      {children}
    </main>
  );
};

export default HomeLayout;

  