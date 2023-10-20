"use client";
import { usePathname, useRouter } from "next/navigation";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SideBarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname(); // gets the pathname of the current page url
  const router = useRouter();// allows route changing inside client components

  const isActive =
    (pathname === "/" && href == "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);// just like a link. would navigate to the href...
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn( //cn allows for dynamic styling based on whatever variable isActive represents
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap_x_2 py-4">
        <Icon // was componenetized by
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
