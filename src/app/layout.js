import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import FloatingButtons from "./floatingbutton/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en "  data-scroll-behavior="smooth">
      <link
        rel="icon"
        href="/favicon/Royal-oak-pajim-fav-icon.png"
        sizes="any"
      />
      <head>
       <meta name="google-site-verification" content="hbgH0jwXsCnFI7E5hFDEJuqQ2diQW8UD51Y1BAoBgO8" />
      </head>
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