import Faq  from "./faq.jsx";
import Navbar from "../components/navbar";
import SignupSection from "../components/signup-section";
import Footer from "../components/footer";

export default function About() {
    return (
        <>
        <Navbar/>
        <Faq/>
        <SignupSection/>
        <Footer/>
        </>
    );
}