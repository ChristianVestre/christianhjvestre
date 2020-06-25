import Head from 'next/head'
import sizes from 'react-sizes';
import { UiContextProvider, UiContext } from '../context/uiContext';
import { DataContextProvider, DataContext } from '../context/dataContext';
import { useContext, useRef, useState } from 'react';
import { MenuRow } from '../components/shared/menuRow';
import { LanguageToggle } from '../components/shared/languageToggle';
import { ResumeContent } from '../components/resume/resumeContent';
import { SkillsContent } from '../components/resume/skillsContent';
import { MobileNavBar } from '../components/shared/mobileNavBar';

export default () => {
    const [{ style }, setUiState] = useContext(UiContext) as any;
    const [{ resume, menu, language }, setDataState] = useContext(DataContext) as any;
    const [drawerState, setDrawerState] = useState(false)
    const topRef = useRef();

    return (
        <div className="gridContainer">
            <Head>
                <title>Christian Vestre</title>
                <link rel="icon" href="/favicon.ico" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'></link>
            </Head>
            <MenuRow imageSrc="/ChristianResume.png" menuText={menu} language={language} refKey={topRef}/>
            <div className="languageToggleContainer">
                <LanguageToggle setDataState={setDataState} language={language} fontSize={4} />
            </div>
            <MobileNavBar style={style} language={language} setDataState={setDataState} setDrawerState={setDrawerState}></MobileNavBar>
            <ResumeContent resume={resume.items} language={language} style={style} />
            <SkillsContent style={style} data={resume.skills} language={language} />
            <style jsx>{`
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
                    display:none;
                }
                .gridContainer{
                    width:100%;
                    height:100%;
                    display:grid;
                    grid-template-columns:1fr;
                    grid-template-rows:0.01fr 0.05fr 2fr;
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