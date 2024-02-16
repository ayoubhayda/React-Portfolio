import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../assets/animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero">
      <div className="left-section">
        <div className="avatar-box">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./images/avatar.png"
            alt="avatar"
            className="avatar"
          />
          <i className="icon-verified"></i>
        </div>
        <div className="details-box">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            Full Stack Web Developer
          </motion.h1>
          <p className="sub-title">
            I’m Ayoub hayda, a passionate full-stack web developer who thrives
            on turning ideas into digital realities. I'm on a mission to create
            seamless user experiences and innovative solutions. I'm a lover of
            all things tech and dedicated to continuous learning.
          </p>
        </div>
        <div className="icons-box">
          <a href="#" className="icon icon-twitter"></a>
          <a href="#" className="icon icon-instagram"></a>
          <a href="#" className="icon icon-github"></a>
          <a href="#" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right-section">
        <Lottie
          lottieRef={lottieRef}
          // @ts-ignore
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          className="hero-animation"
          animationData={dev}
        />
      </div>
    </section>
  );
};

export default Hero;
