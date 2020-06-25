import { LanguageToggle } from "../shared/languageToggle"
import { useContext, useRef } from "react";
import { DataContext } from "../../context/dataContext";
import { ImageContainer } from "../shared/imageContainer";
import { MenuRow } from "../shared/menuRow";
import { ResumeContent } from "./resumeContent";
import { UiContext } from "../../context/uiContext";
import { SkillsContent } from "./skillsContent";

export const DResume = () => {
    const [{resume, menu, language},setDataState] = useContext(DataContext) as any;
    const [{style},setUiState] = useContext(UiContext) as any;

    const topRef = useRef();
    
    return (
        <div className="resumeContainer">
            <MenuRow imageSrc="/ChristianResume.png" menuText={menu} language={language} refKey={topRef}></MenuRow>
            <LanguageToggle setDataState={setDataState} language={language} fontSize={4}/>
            <main className="contentContainer">
                <ResumeContent resume={resume.items} language={language} style={style}/>
                <SkillsContent style={style} data={resume.skills} language={language}/>
            </main>

        
        <style jsx>{`
            .contentContainer{
                display:flex;
                flex-direction:row;
                
            }
            .menuContainer{
                display:flex;
                flex-direction:row;
                width:100vw;
                justify-content:space-evenly;
                height:33vh;
            }
            img{
                margin:0;
                padding:0;
                max-width:14em;
                position:relative;
                bottom:0;
            }
            `}</style>
        </div>
    )
}