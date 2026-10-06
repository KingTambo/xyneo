import Footer from "./Footer";
import Header from "./Header";
import MobBarObserver from "./MobBarObserver";
import TelClickTracker from "./TelClickTracker";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <TelClickTracker />
      <MobBarObserver />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
