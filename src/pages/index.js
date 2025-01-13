import Image from "next/image";
import { Inter } from "next/font/google"; 
import Hero from "../components/Home/Hero";
import Header from "../components/Home/Header";
import Features from "../components/Home/Features";
import Stats from "../components/Home/Stats";
import Sponsors from "../components/Home/Sponsors";
import Footer from "../components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-bricolage">
      <Header/>
      <Hero/>
      {/* <Sponsors/> */}
      {/* <Stats/> */}
      {/* <Features/> */}
      <Footer/>
    </main>
  );
}

// Removed the undefined variable reference
// console.log(data);