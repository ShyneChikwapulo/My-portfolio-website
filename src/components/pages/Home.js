import '../../App.css';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import HeroSection from '../HeroSection';
import Project from '../Project';
import Contact from '../Contact';
import Credit from '../Credit';

function Home() {
  return (
    <>
      <main>
        <section id="top"><HeroSection /></section>
        <section id="about"><AboutMe /></section>
        <section id="experience"><Experience /></section>
        <section id="work"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Credit />
    </>
  );
}

export default Home;