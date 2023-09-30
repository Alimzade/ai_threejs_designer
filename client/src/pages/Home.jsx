import { motion, AnimatePresence, animate } from 'framer-motion';
import { useSnapshot } from 'valtio';
import React, { useState, useEffect } from 'react'

import state from '../store';
import { CustomButton } from '../components';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'

import "./home.css";

const Home = () => {
  const snap = useSnapshot(state);

  const [fullscreenMode, setFullscreenMode] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement;
      if (fullscreenElement) {
        setFullscreenMode(true);
      } else {
        setFullscreenMode(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleExpandClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' >
          <motion.header {...slideAnimation("left")}>
            <img
              src='./pyramids-512.png'
              alt="logo"
              className="w-10 object-contain"
            />
          </motion.header>

          <motion.div className='absolute z-10 top-5 right-1'>

            <span className='icons2'><img src={fullscreenMode ? "../src/assets/collapse.svg" : "../src/assets/expand.svg"}
              alt="" className="icon2" onClick={handleExpandClick} /></span>

          </motion.div>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-baase'>
                Design your unique and exclusive shirt with our brand-new 3D customization tool powered by AI prompting.
                {" "}<br /><strong>{" "}Express your imagination</strong>{" "}and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
        
        
      )}
    </AnimatePresence>
    

  )
}

export default Home