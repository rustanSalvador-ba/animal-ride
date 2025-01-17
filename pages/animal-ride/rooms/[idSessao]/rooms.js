import '../../css/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../../../../Components/NavBar"
import Head from "../../../../Components/Head"
import Footer from "../../../../Components/Footer"
import { useState, useEffect } from 'react'
import { useParams } from 'next/router';
 
export default function Rooms () {
  const [isClient, setIsClient] = useState(false)
  const {idSessao} = useParams();
  useEffect(() => {
    window.$ = window.jQuery = require('jquery')
    setIsClient(true)
  }, [])

  if (!isClient)
  return(<></>)
  else
    return (
    <html>
        <Head/>
        <body>
            <NavBar/>
            <div>{idSessao}</div>
            <Footer name="About"/>
        </body>
    </html>
    )
}
