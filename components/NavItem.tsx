import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const NavItem = ({ label, href }: NavItem) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    setIsActive(href == pathname);
  }, [pathname]);

  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? "bg-bgColor-light" : ""
        } px-4 py-2 text-white rounded-md hover:bg-bgColor-light transition-colors duration-200`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
