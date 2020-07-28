import { SkillsItem } from "./skillsItem"
import { SkillsList } from "./skillsList"
import { useState } from 'react';
import { ReadMoreButton } from "../shared/readMoreButton";

export const SkillsContent = ({style,data,language, menu}) => {
    const [open, setOpenState] = useState("15em")
    return(
        <aside className="skillsAside">
            <section className="skillsContainer">
                <SkillsList language={language} dataKey="languages" data={data} style={style} />
                <SkillsList language={language} dataKey="programming" data={data} style={style} />
            </section>
            <ReadMoreButton language={language} style={style} open={open} closedSize={"15em"} setOpenState={setOpenState} menu={menu} type="see" />
            <style jsx>{`
                .skillsAside{
                    grid-area:skillsContent;
                    width:20vw;
                    height:400vh;
                    margin:0;
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
                        font-size:2.6em;
                        padding-bottom:3vh;
                    }
                    .skillsAside{
                    grid-area:skillsContent;
                    width:100%;
                    height:auto;
                    margin-top:0vh;
                    position:relative;
                    }
                    .skillsContainer{
                        height:${open};
                        overflow:hidden;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        position:relative;
                    }
                }
                `}</style>
        </aside>
    )
}