import { NavBar } from "../../components/NavBar/NavBar";
import { About } from "./sections/About/About";
import { Hero } from "./sections/Hero/Hero";
import { Skills } from "./sections/Skills/Skills";

export function Home() {

    return (
        <div>
            <NavBar />
            <Hero />
            <Skills />
            <About />
        </div>
    )
}