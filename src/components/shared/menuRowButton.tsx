import Link from 'next/link'
import { UiContext } from '../../context/uiContext';
import { useContext } from 'react';
import { useRouter } from 'next/router'

export const MenuRowButton = ({page,text}) => {
    const [{selectedPage, style},setUiState] = useContext(UiContext) as any;
    const router = useRouter()


    const handleClick = (e) => {
        e.preventDefault()
        router.push(page,page=="/index"?"/":page)
    }

    return (
    <li onClick={(e) => handleClick(e)} className="buttonContainer">
        <section className="contentSection">
        {"/index" != page ?
        <div className="selected"></div>:null}
        <h3>{text}</h3>
        </section>
        <svg id="svgline" height="5" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line id="line" x1="0" x2="100%" y1="50%" y2="50%"></line>
        </svg>
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');

            .buttonContainer{
                display:flex;
                flex-direction:column;
            }
            .buttonContainer:nth-last-child(1){
                padding:0;
            }
            .contentSection{
                display:flex;
                flex-direction:row;
                padding-right:2em;
                cursor:pointer;
                margin-top:8vh;
            }
            #svgline{
                position:relative;
                bottom:0;
            }
            #line{
                stroke-width:0.5em;
                stroke:transparent;
                stroke-dasharray: 100%;
                stroke-dashoffset: 90%;
                stroke-linecap:round;
                transition: 0.3s all ease-out;
                
            }
            .buttonContainer:hover #line{
                stroke-dasharray: ${"/index" == page || page == router.pathname  ? "100%":"100%"};
                stroke-width: 0.5em;
                stroke-dashoffset:${"/index" == page || page == router.pathname  ? "0":"-2.8em"};
                stroke: ${style.standard.border};
            }

            .selected{
                height:2em;
                width:2em;
                background:${page == router.pathname ? style.standard.border : "transparent"};
                align-self:center;
                margin:0;
                margin-right:0.5em;
            }
        h3{
            
                        font-size:3em;
                        font-weight:${page == router.pathname ? "600" : "300"};
                        padding:0;
                        align-self:center;
                        margin:0;
                        font-family: 'Work Sans', sans-serif;
                        color:#535353;
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                    }

            `}</style>
    </li>)
}