import Head from 'next/head'
import sizes from 'react-sizes';
import { UiContextProvider } from '../context/uiContext';
import { DataContextProvider } from '../context/dataContext';
import { DResume } from '../components/desktop/resume/resume';

function Resume({ desktop, data }) {
    return (
        <div className="container">
            <Head>
                <title>Christian Vestre</title>
                <link rel="icon" href="/favicon.ico" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
            </Head>
                    {desktop ?
                        <main>
                            <DResume />
                        </main>
                        :
                        <main>
                            <h2>Christian Vestre</h2>
                        </main>
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
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}

const mapSizesToProps = ({ width },props) => (
    console.log(props),
    {
    desktop: (width && width < 560) ? false : true,
});

//{id:1, text:"gi"},{id:3,text:"rext"}
export default sizes(mapSizesToProps)(Resume);