import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    client
      .create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className='head-text'>Contact Me 😊</h2>

      <div className='app__footer-cards'>
        <a href='mailto:raitaut@gmail.com' className='p-text'>
          <div className='app__footer-card '>
            <img src={images.email} alt='email' />
            raitaut@gmail.com
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/raigardas-tautkus/'
          className='p-text'
        >
          <div className='app__footer-card'>
            <img src={images.linkedin} alt='LinkedIn' />
            LinkedIn
          </div>
        </a>
      </div>
      {!isFormSubmitted ? (
        <form
          className='app__footer-form app__flex'
          action='https://formspree.io/xnqgvyqn'
          method='POST'
          target='_blank'
        >
          <div className='app__flex'>
            <input
              className='p-text feedback-input'
              type='text'
              placeholder='Your Name'
              name='Name'
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type='submit'
            className='p-text'
            onClick={handleSubmit}
            value='SUBMIT'
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
