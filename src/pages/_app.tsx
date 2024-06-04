import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "../components/footer";
import NavigationBar from '../components/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen select-none">
      <NavigationBar/>
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}


