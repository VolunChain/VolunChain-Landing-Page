import React, { useRef } from "react";
import { motion, useInView, Variant } from "framer-motion";

interface PopUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  initialScale?: number;
  finalScale?: number;
  viewMargin?: string;
}

const PopUp: React.FC<PopUpProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  initialScale = 0.8,
  finalScale = 1,
  viewMargin = "-100px",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: viewMargin as any });

  const variants = {
    hidden: { 
      opacity: 0, 
      scale: initialScale, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: finalScale, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom easing for a nice pop effect
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PopUp;
