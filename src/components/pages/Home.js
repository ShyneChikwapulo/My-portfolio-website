import '../../App.css';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import HeroSection from '../HeroSection';
import Project from '../Project';
import Contact from '../Contact';
import Credit from '../Credit';
import { Helmet } from "react-helmet-async";



function Home () {
    return (
        <>


            <Helmet>
            <title>Shine Chikwapulo | Software Engineer</title>
            <meta
                name="description"
                content="My name is Shine Chikwapulo, and I’m a software engineer based in Cape Town with a strong focus on Python and full-stack web development. Beyond building projects, I’m genuinely passionate about teaching and mentoring—especially helping beginners understand core concepts and build confidence in their problem-solving skills.
                        I’ve worked on projects ranging from Django and React applications to machine learning systems, and I enjoy breaking down complex ideas into simple, practical explanations. "
            />
            <meta name="google-site-verification" content="q2HC-O3rlZcv1OptYuyn_0wLtIm2_vONOTi2voR0mek" />
            <meta name="keywords" content="Shine Chikwapulo, React Developer, Software Engineer, Python Developer, frontend" />
            <link rel="canonical" href="https://shine-chikwapulo.netlify.app" />
            
            </Helmet> 
                   
            <section id="#">
                <HeroSection/>
            </section>
            <section id="about">
                <AboutMe/>
            </section>
            <section id="experience">
                <Experience/>
            </section>
            <section id="work">
                <Project/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
            <section id="credit">
                <Credit />
            </section>
        </>
    )
}

export default Home