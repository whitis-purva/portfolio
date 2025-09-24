import "../styles/globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={quicksand.className}>
      <Component {...pageProps} />
    </div>
  );
}


