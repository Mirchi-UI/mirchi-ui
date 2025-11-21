import Footer from "@/components/web/layout/Footer";
import Navber from "@/components/web/layout/Navber";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mica UI || A design system for building modern websites",
  description:
    "Mica UI is a modern design system that provides a set of reusable components and styles for building beautiful and responsive web applications.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navber />

      {/* Main content grows to fill space */}
      <main className="flex-grow relative w-full pt-0 md:pt-0">{children}</main>

      <Footer />
    </div>
  );
}
