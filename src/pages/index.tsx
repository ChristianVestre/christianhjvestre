import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
import { LanguageToggle } from "../components/shared/languageToggle";
import { MenuButton } from "../components/christian/menuButton";
import { UiContext } from "../context/uiContext";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import React from "react";
import { DrawerContent } from "../components/shared/drawerContent";
import { MobileBurgerMenu } from "../components/shared/mobileBurgerMenu";
import Head from "next/head";
import { useRouter } from "next/router";

export default ({query}) => {
    const [{ christian,menu, language }, setDataState] = useContext(DataContext) as any;
    const [{ style, randomeImageNumber},setUiState] = useContext(UiContext) as any;
    const [drawerState,setDrawerState] = useState(false)
    const router = useRouter()
    const handleClick = (page) => {
        router.push(page, page == "/index" ? "/" : page)
    }

    let isMobile =typeof document != 'undefined' ? window.matchMedia('(max-width: 760px)').matches: false;
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <nav id="navBarDesktop" className="navBarDesktop">
                <ul className="menuPlacement">
                    <MenuButton page={"/index"} text={christian.menu[language].christian} />
                    <MenuButton page={"/work"} text={christian.menu[language].work} />
                    <MenuButton page={"/resume"} text={christian.menu[language].resume} />
                    <MenuButton page={"/interests"} text={christian.menu[language].interests} />
                </ul>
            </nav>
            <nav id="navBarMobile">
                    <MobileBurgerMenu style={style} toggleDrawer={() => {handleDrawerOpen()}} />
                    <h4 className="noselect">Christian Vestre</h4>
                    <LanguageToggle setDataState={setDataState} language={language} style={style} fontSize={1.6} />
            </nav>
            <section className="headlinePlacement" id="headlinePlacement">
                <h1 className="noselect">Christian Vestre</h1>
            </section>
            <section className="imageContainer">
                <img src="christian/Christian.svg" className="noselect" />
            </section>
            <section className="textPlacement">
                <h2>{christian.text[language].headline}</h2>
                <p >{christian.text[language].content}</p>
                <nav>
                    <ul>
                        <li className="listButton" onClick={() => handleClick("/work")}><p>{christian.text[language].textLinks.work}</p></li>
                        <li className="listButton" onClick={() => handleClick("/resume")}><p>{christian.text[language].textLinks.resume}</p></li>
                        <li className="listButton" onClick={() => handleClick("/interests")}><p>{christian.text[language].textLinks.interests}</p></li>
                    </ul>
                </nav>
            </section>

            <section className="languageToggleContainer">
                    <LanguageToggle setDataState={setDataState} language={language} style={style} fontSize={4} />
            </section>
            {isMobile ? <React.Fragment key={'left'}>
                    <SwipeableDrawer
                        anchor={'left'}
                        open={drawerState}
                        onClose={() => setDrawerState(false)}
                        onOpen={() => handleDrawerOpen()}
                    >
                        <DrawerContent menuText={menu} style={style} imageSrc={DrawerImageArray[randomeImageNumber]} language={language}/>
                    </SwipeableDrawer>
                </React.Fragment>:null
                }
            <style jsx>{`

                    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;600&display=swap');
                    #navBarMobile { display: none; }
                    ul{
                        list-style-type: none;
                    }
                    .listButton{
                        display:flex;
                        flex-direction:row;
                        cursor:pointer;
                        font-size:1.1em;
                        font-family: 'Work Sans', sans-serif;
                        font-weight:600;
                        margin-top:5%;
                        color:${style.standard.text};
                    }
                    .listButton:before{
                        display: block;
                        content: ' ';
                        background-image: url('./Arrow.svg');
                        background-size: 28px 28px;
                        height: 28px;
                        width: 28px;
                        margin-right:1em;
                    }
                    .languageToggleContainer{
                        position:absolute;
                        top:1vh;
                        right:0vw;
                        display:flex;
                        align-items:flex-end;
                        justify-content:flex-end;
                    }
                    .gridContainer{
                        height:100vh;
                        width:100vw;
                        display: grid;
                        grid-template-columns:1fr 2fr 2fr ;
                        grid-template-rows:repeat(3,auto);
                        grid-template-areas:
                        'nav headline headline'
                        'nav img text'
                        'nav img text';
                    }
                    .noselect{
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                    }
                    .bar{
                        display:grid;
                        grid-columns:1 / span 3;
                        grid-rows:2 / span 2;
                        border:solid 0.5em black;
                    }
                    p{
                        width:60%;
                        font-size:1em;
                        white-space: pre-line;
                        margin:0;
                        padding:0;
                        color:#535353;
                    }
                    h2{
                        font-size:4em;
                        padding:0;
                        margin:0;
                        text-align:center;
                        color:#535353;
                    }
                    .textPlacement{
                        grid-area:text;
                        display:flex;
                        align-items:flex-start;
                        justify-content:flex-start;
                        flex-direction:column;
                        margin:0;
                        padding:0;
                        overflow-y:scroll;
                        overflow-x:hidden;
                        padding-top:20%;

                    }
                    .imageContainer{
                        grid-area:img;
                        border:solid 0.5 black;
                        display:flex;
                        align-items:flex-end;
                        justify-content:center;
                    }
                    img{
                        width:auto;
                        max-height:75%;
                        bottom:0;
                    }
                    .headlinePlacement{
                        grid-area:headline;
                        display:flex;
                        align-content:center;
                        justify-content:flex-start;
                        margin-top:5%;
                        
                    }
                    h1{
                        padding:0;
                        margin:0;
                        font-size:7em;
                        font-family: 'Work Sans', sans-serif;
                        font-weight:500;
                        text-decoration:underline;
                        text-decoration-color: #535353;
                        color:#535353;
                    }
                    h3{
                        padding-left:1em;
                        font-size:4em;
                        padding:0;
                        padding-top:1em;
                        margin:0;
                        font-family: 'Work Sans', sans-serif;
                        color:#535353;
                    }
                    .menuPlacement{
                        z-index:1;
                    }
                    .navBarDesktop{
                        grid-area:nav;
                        height:100%;
                        width:100%;
                        display:flex;
                        align-items:center;
                        justify-content:flex-start;
                        overflow-x:hidden;
                    }

                    @media only screen and (max-width: 760px) {
                        ul{
                            position:relative;
                            margin:auto;
                            padding-top:3%;
                            
                        }
                        .listButton{
                            width:80%;
                            font-size:0.9em;
                            margin-left:2%;
                            margin-top:5%;
                        }
                        
                        .listButton:before{
                            display: block;
                            content: ' ';
                            background-image: url('./Arrow.svg');
                            background-size: 20px 20px;
                            height: 20px;
                            width: 20px;
                            margin-right:2em;
                        }
                        .navBarDesktop{
                            display:none;
                        }
                        .menuPlacement{
                            margin:0;
                            padding:0;
                            display:flex;
                            flex-direction:row;
                            padding:10% 0  ;
                            width:100%;
                            align-items:center;
                            justify-content:center;
                        }
                        #headlinePlacement{display:none;}
                        .languageToggleContainer{display:none;}
                        .gridContainer{
                            height:auto;
                            width:100vw;
                            display: grid;
                            grid-template-columns:1fr;
                            grid-template-rows:0.1fr 1fr auto ;
                            grid-template-areas:
                            'nav'
                            'text'
                            'img';
                        }
                        
                        #navBarMobile{
                            grid-area:nav;
                            height:10vh;
                            width:100vw;
                            border-bottom: solid 0.5em ${style.standard.border};
                            display:grid;
                            grid-template-columns:1fr 1fr 1fr;
                            justify-content:center;
                            align-items:center;
                        }
                        .menu{
                            height:100%;
                            width:100%;
                            background:blue;
                        }
                        p{
                            width:80%;
                            font-size:1.1em;
                            white-space: pre-line;
                            margin:0;
                            padding:0;
                            overflow:show;
                            color:#535353;

                        }
                        h2{
                            font-size:5em;
                            padding:0;
                            margin:0;
                            text-align:center;
                            color:#535353;
                        }
                        .textPlacement{
                            padding-top:0;
                            grid-area:text;
                            display:flex;
                            flex-direction:column;
                            align-items:center;                
                        }
                        img{
                            max-width:90%;
                            height:auto;
                            max-height:none;
                            padding-top:5%;
                        }
                        .headlinePlacement{
                            position:relative;
                            left:50%;
                            transform:translate(-50%,0);
                            display:flex;
                            align-items:center;
                            justify-content:center;
                        }
                        .imageContainer{
                            grid-area:img;
                            border:solid 0.5 black;
                            display:flex;
                            align-items:flex-end;
                            justify-content:center;
                            height:100%;
                            width:100%;
                        }
                        h4{
                            padding:0;
                            margin:0;
                            font-size:1.4em;
                            font-family: 'Work Sans', sans-serif;
                            font-weight:600;
                            text-decoration:underline;
                            text-decoration-color: #535353;
                            color:#535353;
                        }
                        .content{
                            grid-area:text;
                            width:80%;
                            height:100%;
                            border: solid 0.5em #EBD5B3;
                        }
                        h3{
                            padding-left:1em;
                            font-size:4em;
                            padding:0;
                            padding-top:1em;
                            margin:0;
                            font-family: 'Work Sans', sans-serif;
                            color:#535353;
                        }
                    }
                        @media only screen and (max-width: 1300px) and (min-width: 760px)  {
                            img{
                                max-width:90%;
                                height:auto;
                            }
                            .navBarDesktop{
                                align-items:flex-start;
                                justify-content:flex-start;
                            }
                            .gridContainer{
                                height:100vh;
                                width:100vw;
                                display: grid;
                                grid-template-columns:1fr 2fr 2fr ;
                                grid-template-rows:repeat(3,auto);
                                grid-template-areas:
                                'headline headline headline'
                                'nav img text'
                                'nav img text';
                            }
                            .headlinePlacement{
                                align-items:center;
                                justify-content:center;
                            }
                            p{
                                width:80%;
                                font-size:1em;
                                white-space: pre-line;
                                margin:0;
                                padding:0;
                                color:#535353;
                            }
                            h1{
                                font-size:5em;
                            }
                            .textPlacement{
                                grid-area:text;
                                display:flex;
                                align-items:flex-start;
                                justify-content:flex-start;
                                flex-direction:column;
                                margin:0;
                                padding:0;
                                overflow-y:scroll;
                                overflow-x:hidden;
                            }
                            .imageContainer{
                                align-items:center;
                            }
                        }

                    }
                `}
            </style>
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