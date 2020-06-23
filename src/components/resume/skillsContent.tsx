import { SkillsItem } from "./skillsItem"
import { SkillsContainer } from "./skillsContainer"

export const SkillsContent = ({style,data,language}) => {

    return(
        <div className="skillsContainer">
            <SkillsContainer language={language} dataKey="languages" data={data} style={style} />
            <SkillsContainer language={language} dataKey="programming" data={data} style={style} />

            <style jsx>{`
                .skillsContainer{
                    width:20vw;
                    height:400vh;
                    margin-top:7vh;
                }
                `}</style>
        </div>
    )
}