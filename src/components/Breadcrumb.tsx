type Crumb = { label: string; href?: string };

type BreadcrumbProps = {
  items: Crumb[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-bar">
      <div className="section-wrap">
        <ol className="bc-list" role="list">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {index > 0 && <span className="bc-sep" aria-hidden="true">›</span>}
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
