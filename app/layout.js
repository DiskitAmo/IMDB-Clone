import Header from "../components/header";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import "../styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          <div className=""> {children}</div>
        </Providers>
      </body>
    </html>
  );
}
