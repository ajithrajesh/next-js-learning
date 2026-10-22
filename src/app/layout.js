
import "./globals.css";
import Navbar from "./component/Navbar";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer>
          <p>© 2026 My Website</p>
        </footer>
      </body>
    </html>
  );
}
