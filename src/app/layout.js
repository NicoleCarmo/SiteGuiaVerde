import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import AccessibilityButtons from './components/AccessibilityButtons'; 

export const metadata = {
  title: "Guia Verde",
  description: "Site para cuidadores de plantas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="fixed top-0 left-0 right-0 z-20">
          <Navbar />
        </div>

        <div className="fixed bottom-[3%] right-10 z-30">
          <AccessibilityButtons />
        </div>

        <div className="static py-32 pt-24">
          {children}
        </div>

        <footer>
          <div className="">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
