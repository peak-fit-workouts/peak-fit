import { Cabin, Press_Start_2P } from "next/font/google";

import { useRouter } from "next/router";
import Image from "next/image";
import MainNavigation from "./MainNavigation";

interface LayoutProps {
  children: any;
}
const font = Cabin({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={`${font.className} relative z-10  bg-bgColor-light`}>
      <MainNavigation />
      <main className="max-w-full mx-auto z-50 relative">
        <div className="min-h-screen max-w-[80%] m-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
