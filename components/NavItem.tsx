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
          isActive ? "bg-indigo-100 text-indigo-700" : "text-gray-800"
        } px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors duration-200 font-medium`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
