/*
 * STONEMARK PAGE LAYOUT
 * Shared wrapper: Navbar + content + Footer + FloatingCTA
 */

import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
