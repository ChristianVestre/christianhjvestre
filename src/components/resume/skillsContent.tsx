import { SkillsItem } from "./skillsItem"
import { SkillsContainer } from "./skillsContainer"
import { useState } from 'react';
import { ReadMoreButton } from "../shared/readMoreButton";

export const SkillsContent = ({style,data,language, menu}) => {
    const [open, setOpenState] = useState("30vh")
    return(
        <aside className="skillsAside">
            <h2>{menu[language].skills}</h2>
            <div className="skillsContainer">
                <SkillsContainer language={language} dataKey="languages" data={data} style={style} />
                <SkillsContainer language={language} dataKey="programming" data={data} style={style} />
            </div>
            <ReadMoreButton language={language} style={style} open={open} closedSize={"30vh"} setOpenState={setOpenState} menu={menu} type="see" />
            <style jsx>{`
                .skillsAside{
                    grid-area:skillsContent;
                    width:20vw;
                    height:400vh;
                    margin-top:7vh;
                }
                h2{
                    font-size:3em;
                    margin:0;
                    padding:0;
                    padding-left:0.5vw;
                    text-align:center;
                    color:${style.standard.text}

                }
                @media only screen and (max-width: 760px) {
                    h2{
                        text-align:center;
                    }
                    .skillsAside{
                    grid-area:skillsContent;
                    width:100vw;
                    height:auto;
                    margin-top:0vh;
                    }
                    .skillsContainer{
                        height:${open};
                        overflow:hidden;

                    }
                }
                `}</style>
        </aside>
    )
}