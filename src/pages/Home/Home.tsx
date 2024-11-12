import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { About } from "./sections/About/About";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";

export function Home() {

    return (
        <div>
            <NavBar />
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}