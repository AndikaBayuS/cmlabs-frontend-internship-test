import Navbar from "~/components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
