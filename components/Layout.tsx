import { Cabin } from "next/font/google";

import { useRouter } from "next/router";
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

  return (
    <div className={`${font.className} relative z-10 bg-gradient-to-b from-bgColor-light via-bgColor to-bgColor-dark`}>
      <MainNavigation />
      <main className="max-w-full mx-auto z-50 relative">
        <div className="min-h-screen max-w-[80%] m-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
