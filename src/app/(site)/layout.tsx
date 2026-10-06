import PageLayout from "@/components/PageLayout";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return <PageLayout>{children}</PageLayout>;
}
