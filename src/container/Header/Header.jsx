import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import headerimg from './headerimg.webp'

import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => (
  <Parallax
    bgImage={headerimg}
    bgImageAlt='headerParallax'
    strength={500}
    className='img'
    blur={1}
  >
    <div className='app__header app__flex' id='home'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Raigardas</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>An Aspiring Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profilesvg} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.typescript, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg' />
          </div>
        ))}
      </motion.div>
    </div>
  </Parallax>
)

export default Header
