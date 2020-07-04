import Head from 'next/head'
import sizes from 'react-sizes';
import { UiContextProvider, UiContext } from '../context/uiContext';
import { DataContextProvider, DataContext } from '../context/dataContext';
import { useContext, useState, useRef } from 'react';
import { MenuRow } from '../components/shared/menuRow';
import { LanguageToggle } from '../components/shared/languageToggle';
import { SubMenu } from '../components/interests/subMenu';
import { InterestsContainer } from '../components/interests/interestsContainer';
import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { DrawerContent } from '../components/shared/drawerContent';
import { MobileNavBar } from '../components/shared/mobileNavBar';
export default () => {
    
    const [{interests, menu,language},setDataState] = useContext(DataContext) as any;
    const [interestsState,setInterestsState] = useState("aimachinelearning") 
    const [{style,randomeImageNumber},setUiState] = useContext(UiContext) as any;
    const topRef = useRef();
    const DrawerImageArray = ["christian/Christian.svg", "christian/ChristianReading.svg", "christian/ChristianResume.svg", "christian/ChristianStudying.svg"]
    const handleDrawerOpen = () => {
        setUiState(state => ({...state, randomeImageNumber:Math.floor(Math.random() * DrawerImageArray.length)}))
        setDrawerState(true)
    }

    const [drawerState, setDrawerState] = useState(false)
    return (
        <div className="gridContainer">
            <Head>
                <title>Christian Vestre</title>
                <link rel="icon" href="/ansikt.svg" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
            </Head>
            <MenuRow imageSrc="christian/ChristianReading.svg" menuText={menu} language={language} refKey={topRef}/>
            <div className="languageToggleContainer">
                <LanguageToggle setDataState={setDataState} language={language} fontSize={4} />
            </div>
            <MobileNavBar style={style} language={language} setDataState={setDataState} handleDrawerOpen={handleDrawerOpen} refKey={topRef}></MobileNavBar>
            <SubMenu subMenu={interests.subMenu[language]} setInterestsState={setInterestsState} interestsState={interestsState} style={style}/>
            <InterestsContainer style={style} content={interests.content[language][interestsState]}/>
            {style.isMobile ? <React.Fragment key={'left'}>
                <SwipeableDrawer
                    anchor={'left'}
                    open={drawerState}
                    onClose={() => setDrawerState(false)}
                    onOpen={() => handleDrawerOpen( )}
                >
                    <DrawerContent menuText={menu} style={style} imageSrc={DrawerImageArray[randomeImageNumber]} language={language} />
                </SwipeableDrawer>
            </React.Fragment> : null
            }
        
        
        <style jsx>{`
            .gridContainer{
                width:100%;
                height:100%;
                display:grid;
                grid-template-columns:1fr;
                grid-template-rows:0.3fr 0.1fr 0.6fr;
                grid-template-areas:
                'nav'
                'subMenu'
                'interestsContainer'
            }
            .languageToggleContainer{
                position:absolute;
                top:1vh;
                width:90%;
                right:0;
                display:flex;
                align-items:flex-end;
                justify-content:flex-end;
            }

            @media only screen and (max-width: 760px) {
                .languageToggleContainer{
                    display:none;
                }
                .topButton{
                    right:2vh;
                    height:4em;
                    width:4em;
                }
                .gridContainer{
                    width:100%;
                    height:100vh;
                    display:grid;
                    grid-template-columns:1fr;
                    grid-template-rows:0.1fr 0.2fr 1fr;
                    grid-template-areas:
                    'nav'
                    'subMenu'
                    'interestsContainer'
                }
                .gridContainer > :global(.menuContainer){
                    display:none;
                }
            }
            `}</style>
            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          height:100%;
          width:100%;
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

