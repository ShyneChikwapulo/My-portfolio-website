import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";


function App() {
  useEffect(() => {
    Aos.init({ duration: 800});
  }, []);
  
  return (
    <>

            <Helmet>
            <title>Shine Chikwapulo | Software Engineer</title>
            <meta name="google-site-verification" content="q2HC-O3rlZcv1OptYuyn_0wLtIm2_vONOTi2voR0mek" />
            <meta
                name="description"
                content="My name is Shine Chikwapulo, and I’m a software engineer based in Cape Town with a strong focus on Python and full-stack web development. Beyond building projects, I’m genuinely passionate about teaching and mentoring—especially helping beginners understand core concepts and build confidence in their problem-solving skills. I’ve worked on projects ranging from Django and React applications to machine learning systems, and I enjoy breaking down complex ideas into simple, practical explanations. "
            />
            
            <meta name="keywords" content="Shine Chikwapulo, React Developer, Software Engineer, Python Developer, frontend" />
            <link rel="canonical" href="https://shine-chikwapulo.netlify.app/" />

              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Shine Chikwapulo",
                  "alternateName": "Shine Chikwapulo Portfolio",
                  "url": "https://shine-chikwapulo.netlify.app/"
                })}
              </script>

              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Shine Chikwapulo",
                  "url": "https://shine-chikwapulo.netlify.app/",
                  "jobTitle": "Software Engineer",
                  "address": {
                    "@type": "Place",
                    "addressLocality": "Cape Town",
                    "addressCountry": "South Africa"
                  },
                  "sameAs": [
                    "https://za.linkedin.com/in/shine-chikwapulo-741b20265",
                    "https://github.com/ShyneChikwapulo"
                  ]
                })}
              </script>

              {/* Open Graph (Facebook / LinkedIn / Google preview) */}
              <meta property="og:title" content="Shine Chikwapulo | Software Engineer" />
              <meta property="og:description" content="I’m a university graduate in Information Technology (Software Engineering) based in Cape Town, focused on backend development, full-stack web applications, and machine learning. I build impactful, scalable solutions." />
              <meta property="og:image" content="https://shine-chikwapulo.netlify.app/formal.jpeg" />
              <meta property="og:url" content="https://shine-chikwapulo.netlify.app/" />
              <meta property="og:type" content="website" />

              {/* Twitter Card */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Shine Chikwapulo | Software Engineer" />
              <meta name="twitter:description" content="I’m a university graduate in Information Technology (Software Engineering) based in Cape Town, focused on backend development, full-stack web applications, and machine learning. I build impactful, scalable solutions." />
              <meta name="twitter:image" content="https://shine-chikwapulo.netlify.app/formal.jpeg" />
            
            </Helmet> 
    <Router>
      <Navbar />
      <Home />
    </Router>
    </>

  );
}

export default App;
