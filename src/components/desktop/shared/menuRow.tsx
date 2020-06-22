import { ImageContainer } from "./imageContainer"
import { MenuRowButton } from "./menuRowButton"

export const MenuRow = ({imageSrc, menuText, language}) => {


    return (
        <div>
            <div className="menuContainer">
            <MenuRowButton page="/index" text={menuText[language].christian} />
            <MenuRowButton page="/work" text={menuText[language].work}/>
            <ImageContainer src={imageSrc}/>
            <MenuRowButton page="/resume" text={menuText[language].resume}/>
            <MenuRowButton page="/interests" text={menuText[language].interests}/>
            </div>
            <style jsx>{`
                        .menuContainer{
                            display:flex;
                            flex-direction:row;
                            width:100%;
                            justify-content:space-evenly;
                            height:20vh;
                        }
            
            `}</style>
        </div>
    )
}