import { LanguageToggle } from "../components/shared/languageToggle"
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/dataContext";
import { MenuRow } from "../components/shared/menuRow";
import { UiContext } from "../context/uiContext";
import { WorkExhibit } from "../components/work/workExhibit";
import { SubMenu } from "../components/work/subMenu";
import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { DrawerContent } from "../components/shared/drawerContent";
import Head from "next/head";
import { MobileNavBar } from "../components/shared/mobileNavBar";
import { ArrowUp } from "../components/shared/arrowUp";

export default () => {
    const [{ work, menu, language }, setDataState] = useContext(DataContext) as any;
    const [{ style,randomeImageNumber},setUiState] = useContext(UiContext) as any;
    const topDRef = useRef() as any
    const topMRef = useRef() as any
    const [drawerState, setDrawerState] = useState(false)
    const DrawerImageArray = ["christian/Christian.svg", "christian/ChristianReading.svg", "christian/ChristianResume.svg", "christian/ChristianStudying.svg"]
    const handleDrawerOpen = () => {
        setUiState(state => ({...state, randomeImageNumber:Math.floor(Math.random() * DrawerImageArray.length)}))
        console.log(Math.floor(Math.random() * DrawerImageArray.length))
        setDrawerState(true)
    }
    console.log(randomeImageNumber)


    const refs = work.reduce((acc, value) => {
        acc[value[language].headline] = useRef();
        return acc;
    }, {});
    const handleClick = id => {
        refs[id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }



    return (
        <div className="gridContainer">
            <Head>
                <title>Christian Vestre</title>
                <link rel="icon" href="/ansikt.svg" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <MenuRow imageSrc="christian/ChristianStudying.svg" menuText={menu} language={language} refKey={topDRef}></MenuRow>
            <div className="languageToggleContainer">
                <LanguageToggle setDataState={setDataState} language={language} fontSize={4} />
            </div>
            <MobileNavBar style={style} language={language} setDataState={setDataState} handleDrawerOpen={handleDrawerOpen} refKey={topMRef}></MobileNavBar>
            <SubMenu data={work} language={language} handleClick={handleClick} style={style} />
            {work.map((d, i) => {
                return <WorkExhibit key={i} index={i} language={language} menu={menu} style={style} data={d[language]} refKey={refs[d[language].headline]} />
            })}
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
                    margin:0;
                    padding:0;
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
            .gridContainer{
                width:100%;
                height:100%;
                display:grid;
                grid-template-columns:1fr;
                grid-template-rows:0.2fr 0.2fr repeat(5,0.65fr);
                grid-template-areas:
                'nav'
                'subMenu'
                'workExhibit0'
                'workExhibit1'
                'workExhibit2'
                'workExhibit3'  
                'workExhibit4';
            }
            .gridContainer > :global(.mobileNavBar){
                    display:none;
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
                    height:100%;
                    display:grid;
                    grid-template-columns:1fr;
                    grid-template-rows:0.2fr auto repeat(5,auto);
                    grid-template-areas:
                    'nav'
                    'subMenu'
                    'workExhibit0'
                    'workExhibit1'
                    'workExhibit2'
                    'workExhibit3'
                    'workExhibit4'
                }
                .gridContainer > :global(.menuContainer){
                    display:none;
                }
                .gridContainer > :global(.subMenuContainer){
                    height:30vh;
                    display:grid;
                    width:90%;
                    margin:0 5% 0 5%;
                    grid-template-columns:1fr 1fr;
                    grid-template-rows:0.2fr 0.2fr 0.2fr;
                    grid-row-gap:2.5vh;
                    align-items:space-evenly;
                    justify-content:center;
                }
                .gridContainer > :global(.subMenuText){
                    font-size:0.8em;
                }
            }
            `}</style>
            <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    scrollbar-color: ${style.standard.border} white;
                    overflow: overlay;
                    min-height: -webkit-fill-available;
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