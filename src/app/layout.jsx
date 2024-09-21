import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Notifications from "@/components/notifications/Notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container px-4 mx-auto min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Notifications />
          <Footer />
        </div>
      </body>
    </html>
  );
}
