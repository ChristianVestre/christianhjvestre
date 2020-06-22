import { SkillsItem } from "./skillsItem"

export const SkillsContainer = ({style,data,dataKey,language}) => {
console.log(dataKey)
    return(
        <div className="skillsContainer">
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
                `}</style>
        </div>
    )
}