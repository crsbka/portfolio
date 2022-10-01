import './App.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import {Skills} from "./components/Skills"
import {Projects} from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const EMAIL_ADDRESS = "kristina.laktiushkina@gmail.com";
export const GITHUB_URL = "https://github.com/crsbka";
export const LINKEDIN_URL = "https://www.linkedin.com/in/kristina-laktiushkina";
export const INSTAGRAM_URL = "https://www.instagram.com/crsbka/?hl=en";
export const FULL_NAME = "Kristina Laktiushkina";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer />
        </div>
    );
}

export default App;
