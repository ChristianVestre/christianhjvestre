import Head from 'next/head'
import sizes from 'react-sizes';
import { UiContextProvider } from '../context/uiContext';
import { DataContextProvider } from '../context/dataContext';
import { DChristian } from '../components/desktop/christian/christian';
import { MChristian } from '../components/mobile/christian/christian';
import { useState, useLayoutEffect } from 'react';



function Home({desktop,data}) {
/*  const [isMobile,setIsMobile] = useState(false)
  useLayoutEffect( () => {
    let update:boolean = typeof document !== 'undefined' ? window.matchMedia('(max-width: 600px)').matches:false;
    setIsMobile(update)
  },[isMobile])
*/
  let isMobile:boolean = typeof document !== 'undefined' ? window.matchMedia('(max-width: 600px)').matches:false;
  
  console.log(isMobile)
  return (
    <div className="container">
      <Head>
        <title>Christian Vestre</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
      </Head>
                {
                isMobile ?
                          
                          <MChristian/>
                    :
                          <DChristian/>
                }


      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            width:100vw;
            min-height: 100vh;
            min-height: -webkit-fill-available;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

const mapSizesToProps = ({ width }) => ({
  desktop: (width && width < 800) ? false : true,
});

//{id:1, text:"gi"},{id:3,text:"rext"}
export default Home;