import Cards from "@/components/Cards";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Scroll from "@/components/Scroll";
import UpcomingWebinars from "@/components/UpComingWebnor";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-whte/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <Scroll/>
      <Cards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
