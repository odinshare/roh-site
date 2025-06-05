import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export const metadata = {
  title: 'Recovery on the Harbor | East Boston Peer Recovery Center',
  description: 'Free, inclusive peer recovery support in East Boston. Open to all individuals, families, and allies affected by addiction.',
  openGraph: {
    title: 'Recovery on the Harbor | East Boston Peer Recovery Center',
    description: 'Empowering recovery through peer connection and community resources.',
    url: 'https://recoveryontheharbor.com',
    siteName: 'Recovery on the Harbor',
    type: 'website',
  },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        {/* 1. Lazy-loading video background (z-0) */}
        <VideoBackground
          portraitSrc="https://videos.recoveryontheharbor.com/output-mobile-noaudio.mp4"
          landscapeSrc="https://videos.recoveryontheharbor.com/output-desktop-noaudio.mp4"
          posterPortrait="/still_portrait.png"
          posterLandscape="/still_landscape.png"
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
