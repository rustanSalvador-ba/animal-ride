
import NavBar from "../Components/NavBar"
import Head from "../Components/Head"
import Footer from "../Components/Footer"
import { useState, useEffect } from 'react'
import CSS from '../css/Styles.css';
 
export default function Contact () {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    window.$ = window.jQuery = require('jquery')
    setIsClient(true)
  }, [])

  if (!isClient)
  return(<></>)
  else
    return (
    <html>
        <CSS/>
        <Head/>
        <body>
            <NavBar/>
            <div className='text-center'>Em construção...</div>
            <Footer name="Contact"/>
        </body>
    </html>
    )
}
