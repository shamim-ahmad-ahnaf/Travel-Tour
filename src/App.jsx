import './App.css'
import BlogSection from './Blog/BlogSection'
import About from './components/About'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection'
import PopularPackages from './components/PopularPackages'
import Testimonials from './components/Testimonials'
import Contact from './Contact/Contact'
import CourseSection from './CourseSection/Course'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import Gallery from './Gallery/Gallery'
import Navbar from './Navbar/Navbar'
import Newsletter from './Newsletter/Newsletter'
import Pricing from './Pricing/Pricing'
import QuestionAnswer from './QuestionAnswer/QuestionAnswer'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import Team from './Team/Team'


function App() {

  return (
    <>
      <Navbar />
      <div className="">
        <div id="home" className=" scroll-smooth">
          <HeroSection />
        </div>
        <div id="packages" className=" scroll-smooth">
          <PopularPackages />
        </div>
        <div id="about" className=" scroll-smooth">
          <About />
        </div>
       <div id="courses" className=" scroll-smooth">
       <CourseSection />
       </div>
        <Gallery />
        <Testimonials />
        <Pricing />
        <Team />
        <BlogSection />
        <QuestionAnswer />
        <div id="contact" className=" scroll-smooth">
          <Contact />
        </div>
        <Newsletter />
        <ScrollToTop />
        <DarkModeToggle />
        <Footer />
      </div>
    </>

  )
}

export default App
