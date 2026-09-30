import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Headline animation
      gsap.from(".hero-title span", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Description animation
      gsap.from(".hero-description", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      // Statistics animation
      gsap.from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Circle entrance
      gsap.from(".visual-circle", {
        opacity: 0,
        scale: 0.7,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      // Scroll indicator
      gsap.from(".scroll-indicator", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        delay: 1.3,
        ease: "power2.out",
      });

      // 🚗 CAR SCROLL ANIMATION
     gsap.to(".visual-object", {
  x: 120,
  y: -25,
  rotation: 5,
  scale: 1.05,

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.8,
  },
});

      // Circle moves slightly with the car
      gsap.to(".visual-circle", {
        y: -25,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main>

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            SCROLL EXPERIENCE
          </p>

          <h1 className="hero-title">
            <span>W E L C O M E</span>
            <span>I T Z F I Z Z</span>
          </h1>

          <p className="hero-description">
            A smooth scroll-driven visual experience built with React,
            JavaScript and GSAP.
          </p>

          <div className="stats">

            <div className="stat">
              <h2>92%</h2>
              <p>Visual Impact</p>
            </div>

            <div className="stat">
              <h2>85%</h2>
              <p>Smooth Motion</p>
            </div>

            <div className="stat">
              <h2>76%</h2>
              <p>User Engagement</p>
            </div>

          </div>

        </div>

        <div className="visual-area">

          <div className="visual-circle">

            <img
              src="/car.svg"
              alt="Stylized car"
              className="visual-object"
            />

          </div>

          <p className="scroll-indicator">
            SCROLL <span>↓</span>
          </p>

        </div>

      </section>

      <section className="scroll-space">
  <div className="scroll-content">
    <p className="section-label">SCROLL-DRIVEN EXPERIENCE</p>

    <h2>
      Motion that
      <span>responds to you.</span>
    </h2>

    <p className="section-text">
      Every movement is connected to your scroll, creating a smooth and
      interactive visual experience.
    </p>
  </div>
</section>

    </main>
  );
}

export default App;