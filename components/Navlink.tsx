"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  text: string;
}

export const NavLink: React.FC<Props> = ({ href, text }) => {
  const pathname = usePathname();
  const current =
    href === pathname || (href !== "/" && pathname.includes(href));

  return (
    <Link
      className={cn(current && "bg-accent", "p-3 rounded flex items-center")}
      href={href}
    >
      {text}
    </Link>
  );
};
