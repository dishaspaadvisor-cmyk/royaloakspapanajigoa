import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import FloatingButtons from "./floatingbutton/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon/Royal-oak-pajim-fav-icon.png"
        sizes="any"
      />
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <Navigation />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer at Bottom */}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}