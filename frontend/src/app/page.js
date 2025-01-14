import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <HeroSection />
    <Products />
    <Footer />
    </>
  );
}
