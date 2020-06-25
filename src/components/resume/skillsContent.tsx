import { SkillsItem } from "./skillsItem"
import { SkillsContainer } from "./skillsContainer"

export const SkillsContent = ({style,data,language}) => {

    return(
        <aside className="skillsContainer">
            <SkillsContainer language={language} dataKey="languages" data={data} style={style} />
            <SkillsContainer language={language} dataKey="programming" data={data} style={style} />

            <style jsx>{`
                .skillsContainer{
                    grid-area:skillsContent;
                    width:20vw;
                    height:400vh;
                    margin-top:7vh;
                }
                @media only screen and (max-width: 760px) {
                    .skillsContainer{
                    grid-area:skillsContent;
                    width:100vw;
                    height:auto;
                    margin-top:0vh;
                    }
                }
                `}</style>
        </aside>
    )
}