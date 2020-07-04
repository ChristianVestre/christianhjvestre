import { MenuRowButton } from "./menuRowButton"
import { ImageContainer } from "./imageContainer"
import { useContext } from "react"
import { UiContext } from "../../context/uiContext"
import { useRouter } from "next/router"

export const DrawerContent = ({style,imageSrc,menuText,language}) => {
    return(
        <section className="drawerContainer">
            <ul className="buttons">
            <DrawerMenuButton page="/index" text={menuText[language].christian} />
            <DrawerMenuButton page="/work" text={menuText[language].work}/>
            <DrawerMenuButton page="/resume" text={menuText[language].resume}/>
            <DrawerMenuButton page="/interests" text={menuText[language].interests}/>
            </ul>
            <img src={imageSrc}/>
            <style jsx>{`
                .buttons{
                    padding-top:20%;
                    padding-left:10%;
                }
                .drawerContainer{
                    display:flex;
                    flex-direction:column;
                    width:70vw;
                    height:100vh;
                    justify-content:space-between;
                }
                img{
                    width:90%;
                    height:auto;
                    max-height:40%;
                    align-self:center;
                }
                
                `}</style>
        </section>
    )
}

const DrawerMenuButton =({page, text}) =>{
        const [{style},] = useContext(UiContext) as any;
        const router = useRouter()

        const pathname = router.pathname == "/" ? "/index":router.pathname
    
        const handleClick = (e) => {
            e.preventDefault()
            router.push(page,page=="/index"?"/":page)
        }
    
        return (
        <li onClick={(e) => handleClick(e)} className="container">
            <div className="selected"></div>
                <h3>{text}</h3>
            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');
    
                .container{
                    display:flex;
                    flex-direction:row;
                    padding-bottom:4vh;
                }
                .container:nth-last-child(1){
                    padding:0;
                }
                div{
                    cursor:pointer;

                }
                .selected{
                    height:1em;
                    width:1em;
                    background:${page == pathname ? style.standard.border : "transparent"};
                    align-self:center;
                    margin:0;
                    margin-right:1vw;
                }
            h3{
                
                            font-size:2em;
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