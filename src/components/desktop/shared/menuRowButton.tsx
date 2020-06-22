import Link from 'next/link'
import { UiContext } from '../../../context/uiContext';
import { useContext } from 'react';
import { useRouter } from 'next/router'

export const MenuRowButton = ({page,text}) => {
    const [{selectedPage, style},setUiState] = useContext(UiContext) as any;
    const router = useRouter()
    console.log(router.pathname)


    const handleClick = (e) => {
        e.preventDefault()
        router.push(page,page=="/index"?"/":page)
    }

    return (
    <div onClick={(e) => handleClick(e)} className="container">
        {"/index" != page ?
        <div className="selected"></div>:null}
            <h3>{text}</h3>
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');

            .container{
                display:flex;
                flex-direction:row;
            }
            .container:nth-last-child(1){
                padding:0;
            }
            div{

                padding-right:2em;
                cursor:pointer;
                margin-top:8vh;

            }
            .selected{
                height:2em;
                width:2em;
                background:${page == router.pathname ? style.standard.border : "transparent"};
                align-self:center;
                margin:0;
                margin-right:1vw;
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
    </div>)
}