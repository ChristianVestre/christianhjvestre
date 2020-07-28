import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UiContext } from '../../context/uiContext';

export const MenuButton = ({ page, text }) => {

    const [{ selectedPage, style }, setUiState] = useContext(UiContext) as any;
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(page, page == "/index" ? "/" : page)
    }

    const pathname = router.pathname == "/" ? "/index":router.pathname
    return (
        <li onClick={(e) => handleClick(e)} className="menuButtonContainer">
            <section className="content">
            <div className="selected"></div>
            <h3>{text}</h3>
            </section>
            <svg id="svgline" height="5" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line id="line" x1="0" x2="100%" y1="50%" y2="50%"></line>
            </svg>
            <style jsx>{`
            .content{
                display:flex;
                flex-direction:row;
            }
            div{
                padding-left:2em;
                cursor:pointer;
            }
            #svgline{
                position:relative;
                bottom:0;
            }
            #line{
                stroke-width:0.5em;
                stroke:transparent;
                stroke-dasharray: 100%;
                stroke-dashoffset:${"/index" == page || page == router.pathname  ? "100%":"-20%"};
                stroke-linecap:round;
                transition: 0.3s all ease-out;
                
            }

            .menuButtonContainer:hover #line{
                stroke-dasharray: ${"/index" == page || page == router.pathname  ? "100%":"80%"};
                stroke-width: 0.5em;
                stroke-dashoffset:${"/index" == page || page == router.pathname  ? "0":"-2.8em"};
                stroke: ${style.standard.border};
            }

            .selected{
                height:2em;
                width:1em;
                background:${ page === pathname? style.standard.border:  "transparent"};
                align-self:center;
                margin:0;
                margin-right:1em;
            }
            .menuButtonContainer{
                display:flex;
                flex-direction:column;
                padding-top:5vh;
            }
        h3{
                        font-size:3em;
                        padding:0;
                        margin:0;
                        font-weight:${page == pathname ? "600" : "300"};
                        font-family: 'Work Sans', sans-serif;
                        color:#535353;
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                        align-items:center;
                    }
                    @media only screen and (max-width: 760px) {
                        .menuButtonContainer{
                            display:${ page === pathname? "none":  "flex"};
                            padding:0 5%;  
                            flex-direction:row;
                        }
                        h3{
                            font-size:1.3em;
                        }
                        .selected{
                            display:none;
                            padding:0;
                        }
                    }
            `}</style>
        </li>)
}