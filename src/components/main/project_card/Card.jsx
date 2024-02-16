import "./card.css";
import { AnimatePresence, motion } from "framer-motion";
const Card = ({ title, description, image, link, github }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ transform: "scale(0.4)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", damping: 8, stiffness: 50 }}
        className="card"
      >
        <div className="card-header">
          <img src={image} alt="" className="card-image" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          <div className="icons-box">
            <a href={link} className="icon icon-link" />
            <a href={github} className="icon icon-github" />
          </div>
          <a href="#" className="card-btn">
            <span>more</span>
            <i className="icon-arrow-right" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
