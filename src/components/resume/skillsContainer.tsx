import { SkillsItem } from "./skillsItem"

export const SkillsContainer = ({style,data,dataKey,language}) => {
    return(
        <section className="skillsContainer">
            <h3>{data[dataKey][language].headline}</h3>
            {data[dataKey][language].content.map((d,i) => {return <SkillsItem key={i} data={d} style={style}/> })}
            
            <style jsx>{`
                h3{
                    font-size:2em;  
                    margin:0;
                    padding:0;
                }
                .skillsContainer{
                    width:20vw;
                    padding:3%;
                    padding-left:5%;
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
        </section>
    )
}