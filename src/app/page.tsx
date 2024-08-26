import AboutUs from "@/components/ui/aboutUs/aboutUs";
import Hero from "@/components/ui/heroSection/hero";
import Navbar from "@/components/ui/navbar/Navbar";
import Projects from "@/components/ui/projects/projects";
import Testimonial from "@/components/ui/testimonials/testimonial";
import LogoSection from "@/components/ui/heroSection/logos";
import Services from "@/components/ui/our-services/serivces";
import Getintouch from "@/components/ui/fourm/getintouch";
import Footer from "@/components/ui/footer/footer";
export default function Home() {
  return (
    <main >
       <Navbar/>
        <section id="home"><Hero/></section>
        <LogoSection/>
        <section id="aboutUs"><AboutUs/></section>
        <section id="projects"><Projects/></section>
        <Testimonial/>
        <section id="our-services"><Services/></section>
        <section id="get-in-touch"><Getintouch/></section>
        <Footer/>
    </main>
  );
}
