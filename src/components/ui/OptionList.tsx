import React, { ReactNode } from "react";
import Link from "next/link";

interface OptionItem {
  content: ReactNode;
  href: string;
}

interface OptionListProps {
  items: OptionItem[];
  className?: string;
  itemClassName?: string;
}

function OptionList({ items, className, itemClassName }: OptionListProps) {
  return (
    <ul className={`space-y-2 ${className || ""}`}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`flex items-center gap-2 text-sm ${itemClassName}`}
          >
            {item.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default OptionList;
