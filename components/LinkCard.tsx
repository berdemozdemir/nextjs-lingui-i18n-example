import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type LinkCardProps = {
  children: ReactNode;
  href: string;
};

export const LinkCard = ({ children, href }: LinkCardProps) => (
  <Link
    href={href}
    className="flex items-center border justify-between w-62 rounded-lg bg-white px-4 py-3 shadow-sm hover:shadow-md transition group"
  >
    {children}

    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" />
  </Link>
);
