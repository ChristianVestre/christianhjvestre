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
            <div className="selected"></div>
            <h3>{text}</h3>
            <style jsx>{`
            div{
                padding-left:2em;
                cursor:pointer;
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
                flex-direction:row;
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