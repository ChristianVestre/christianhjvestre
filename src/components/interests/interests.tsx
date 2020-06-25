import { LanguageToggle } from "../shared/languageToggle"
import { useContext, useState, useRef } from 'react';
import { DataContext } from "../../context/dataContext";
import { MenuRow } from '../shared/menuRow';
import { SubMenu } from "./subMenu";
import { InterestsContainer } from "./interestsContainer";
import { UiContext } from "../../context/uiContext";

export const DInterests = () => {
    const [{interests, menu,language},setDataState] = useContext(DataContext) as any;
    const [interestsState,setInterestsState] = useState("aimachinelearning") 
    const [{style},setUiState] = useContext(UiContext) as any;
    const topRef = useRef();

    return (
        <div className="container">
            <MenuRow imageSrc="ChristianReading.png" menuText={menu} language={language} refKey={topRef}/>
            <LanguageToggle setDataState={setDataState} language={language} fontSize={4}/>
            <SubMenu subMenu={interests.subMenu[language]} setInterestsState={setInterestsState} interestsState={interestsState} style={style}/>
            <InterestsContainer style={style} content={interests.content[language][interestsState]}/>
        
        
        
        <style jsx>{`
            .menuContainer{
                display:flex;
                flex-direction:row;
                width:99vw;
                justify-content:space-evenly;
                height:25vh;
            }
            img{
                margin:0;
                padding:0;
                width:33vh;
                

            }
            `}</style>
        </div>
    )
}