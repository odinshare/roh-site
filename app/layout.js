import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export const metadata = {
  title: "Recovery on the Harbor",
  description: "Peer Recovery Support Center · Massachusetts · Free Membership",
  icons: { icon: "/favicon.ico" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        {/* 1. Lazy-loading video background (z-0) */}
        <VideoBackground
          portraitSrc="https://videos.recoveryontheharbor.com/hero-bg-compressed_mobile.mp4"
          landscapeSrc="https://videos.recoveryontheharbor.com/hero-bg-compressed.mp4"
          poster="/logo.png"
        />

        {/* 2. Overlay (z-10) for better contrast */}
        <div className="fixed inset-0 z-10 bg-black/50" />

        {/* 3. Site-wide Header (z-20) */}
        <Header />

        {/* 4. Main page content (z-20), pushed below header (pt-16) */}
        <main className="relative z-20 pt-16">
          {children}
          {/* 5. Site-wide Footer */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
