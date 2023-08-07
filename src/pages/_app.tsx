import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "../components/Footer";
import NavigationBar from '../components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}


