import React from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const startYear = BLOG.SINCE && BLOG.SINCE !== currentYear && BLOG.SINCE + '-'
  return (
    <footer
      className='font-sans dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      <DarkModeButton/>

      <i className='fas fa-copyright' /> {`${startYear}${currentYear}`} <span>

       <span className='text-xs font-serif'>Powered by <a href='https://www.uuuoo.tk' className='underline dark:text-gray-300'>NotionNext</a></span></span><br/>

    </footer>
  )
}

export default Footer