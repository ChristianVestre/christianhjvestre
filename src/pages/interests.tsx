import Head from 'next/head'
import sizes from 'react-sizes';
import { UiContextProvider, UiContext } from '../context/uiContext';
import { DataContextProvider, DataContext } from '../context/dataContext';
import { DInterests } from '../components/interests/interests';
import { useContext, useState, useRef } from 'react';
import { MenuRow } from '../components/shared/menuRow';
import { LanguageToggle } from '../components/shared/languageToggle';
import { SubMenu } from '../components/interests/subMenu';
import { InterestsContainer } from '../components/interests/interestsContainer';
export default () => {
    
    const [{interests, menu,language},setDataState] = useContext(DataContext) as any;
    const [interestsState,setInterestsState] = useState("aimachinelearning") 
    const [{style},setUiState] = useContext(UiContext) as any;
    const topRef = useRef();

    return (
        <div className="container">
            <Head>
                <title>Christian Vestre</title>
                <link rel="icon" href="/favicon.ico" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
            </Head>

            <MenuRow imageSrc="ChristianReading.png" menuText={menu} language={language} refKey={topRef}/>
            <LanguageToggle setDataState={setDataState} language={language} fontSize={4}/>
            <SubMenu subMenu={interests.subMenu[language]} setInterestsState={setInterestsState} interestsState={interestsState} style={style}/>
            <InterestsContainer style={style} content={interests.content[language][interestsState]}/>
        
        
        
        <style jsx>{`
            .menuContainer{
                display:flex;
                flex-direction:row;
                width:99vw;
                justify-content:space-evenly;
                height:25vh;
            }
            img{
                margin:0;
                padding:0;
                width:33vh;
                

            }
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

