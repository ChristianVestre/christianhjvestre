import { ImageContainer } from "./imageContainer"
import { MenuRowButton } from "./menuRowButton"

export const MenuRow = ({imageSrc, menuText, language, refKey}) => {


    return (
        <nav className="menuContainer" id="menuContainer" ref={refKey}>
            <ul>
            <MenuRowButton page="/index" text={menuText[language].christian} />
            <MenuRowButton page="/work" text={menuText[language].work}/>
            <ImageContainer src={imageSrc}/>
            <MenuRowButton page="/resume" text={menuText[language].resume}/>
            <MenuRowButton page="/interests" text={menuText[language].interests}/>
            </ul>
            <style jsx>{`
                        .menuContainer{
                            grid-area:nav;
                            width:100%;
                            height:100%;
                        }
                        ul{
                            display:flex;
                            flex-direction:row;
                            width:100%;
                            height:100%;
                            justify-content:space-evenly;   
                        }
            
            `}</style>
        </nav>
    )
}