import Head from 'next/head'
import sizes from 'react-sizes';
import { UiContextProvider, UiContext } from '../context/uiContext';
import { DataContextProvider, DataContext } from '../context/dataContext';
import { useContext, useRef, useState, Ref } from 'react';
import { MenuRow } from '../components/shared/menuRow';
import { LanguageToggle } from '../components/shared/languageToggle';
import { ResumeContent } from '../components/resume/resumeContent';
import { SkillsContent } from '../components/resume/skillsContent';
import { MobileNavBar } from '../components/shared/mobileNavBar';
import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { DrawerContent } from '../components/shared/drawerContent';
import { ArrowUp } from '../components/shared/arrowUp';

export default () => {
    const [{ style,randomeImageNumber }, setUiState] = useContext(UiContext) as any;
    const [{ resume, menu, language }, setDataState] = useContext(DataContext) as any;
    const [drawerState, setDrawerState] = useState(false)
    const topDRef = useRef() as any
    const topMRef = useRef() as any
    const DrawerImageArray = ["christian/Christian.svg", "christian/ChristianReading.svg", "christian/ChristianResume.svg", "christian/ChristianStudying.svg"]
    const handleDrawerOpen = () => {
        setUiState(state => ({...state, randomeImageNumber:Math.floor(Math.random() * DrawerImageArray.length)}))
        setDrawerState(true)
    }


    return (
        <div className="gridContainer">
            <Head>
                <title>Christian Vestre</title>
                <link rel="icon" href="/ansikt.svg" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
            </Head>
            <MenuRow imageSrc="christian/ChristianResume.svg" menuText={menu} language={language} refKey={topDRef}/>
            <div className="languageToggleContainer">
                <LanguageToggle setDataState={setDataState} language={language} fontSize={4} />
            </div>
            <MobileNavBar style={style} language={language} setDataState={setDataState} handleDrawerOpen={handleDrawerOpen} refKey={topMRef}></MobileNavBar>
            <ResumeContent resume={resume.items} language={language} style={style} menu={menu} />
            <SkillsContent style={style} data={resume.skills} language={language} menu={menu} />
            {style.isMobile ? <React.Fragment key={'left'}>
                <SwipeableDrawer
                    anchor={'left'}
                    open={drawerState}
                    onClose={() => setDrawerState(false)}
                    onOpen={() => handleDrawerOpen()}
                >
                    <DrawerContent menuText={menu} style={style} imageSrc={DrawerImageArray[randomeImageNumber]} language={language} />
                </SwipeableDrawer>
            </React.Fragment> : null
            }
            <button className="topButton" onClick={() => style.isMobile ? topMRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}):topDRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                <ArrowUp/>
            </button>
            <style jsx>{`
            .topButton{
                    position:fixed;
                    background:transparent;
                    height:5em;
                    width:5em;
                    z-index:2;
                    bottom:3vh;
                    right:2vw;
                    outline:none;
                    border: solid 0.5em ${style.standard.border}

                }
                .topButton:active{
                    outline:none;
                }
                button:active{
                        outline:none;
                    }
                    button::-moz-focus-inner { border:0; }
                .languageToggleContainer{
                    position:absolute;
                    top:1vh;
                    width:90%;
                    right:0;
                    display:flex;
                    align-items:flex-end;
                    justify-content:flex-end;
                }
                .gridContainer{
                    width:100%;
                    height:100%;
                    display:grid;
                    grid-template-columns:1.5fr 0.5fr;
                    grid-template-rows:0.02fr 1fr;
                    grid-template-areas:
                    'nav nav'
                    'resumeContent skillsContent'
                }
                img{
                    margin:0;
                    padding:0;
                    max-width:14em;
                    position:relative;
                    bottom:0;
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
                    width:98%;
                    height:100%;
                    display:grid;
                    grid-template-columns:1fr;
                    grid-template-rows:0.01fr 0.03fr 2fr;
                    grid-template-areas:
                    'nav'
                    'skillsContent'
                    'resumeContent'
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
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            }
            `}</style>
        </div>
        )
}