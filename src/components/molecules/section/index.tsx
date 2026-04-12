import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Item from "@/components/atoms/item";

export type SectionItem = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  href?: string;
};

type SectionProps = {
  title: string;
  items: SectionItem[];
  onItemClick?: (item: SectionItem) => void;
};

function Section({ title, items, onItemClick }: SectionProps) {
  return (
    <nav>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
        {title}
      </p>
      <ul className="space-y-0.5">
        {items.map((item) =>
          item.href ? (
            <li key={item.label}>
              <Link to={item.href} className="no-underline">
                <Item
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  onClick={() => onItemClick?.(item)}
                />
              </Link>
            </li>
          ) : (
            <Item
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={item.active}
              onClick={() => onItemClick?.(item)}
            />
          )
        )}
      </ul>
    </nav>
  );
}

export default Section;
