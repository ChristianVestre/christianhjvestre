import { SkillsItem } from "./skillsItem"

export const SkillsList = ({style,data,dataKey,language}) => {
    return(
        <ul className="skillsList">
            <h3>{data[dataKey][language].headline}</h3>
            {data[dataKey][language].content.map((d,i) => {return <SkillsItem key={i} data={d} style={style}/> })}
            
            <style jsx>{`
                h3{
                    font-size:1.8em;  
                    margin:0;
                    padding:0;
                    font-family: 'Open sans';
                    font-weight:600;
                    color:${style.standard.text}
                }
                .skillsList{
                    width:20vw;
                    padding:3%;
                    padding-left:5%;
                }
                @media only screen and (max-width: 760px) {
                    .skillsList{
                    position:relative;
                    padding:0;
                    width:90%;
                    height:auto;
                    margin-top:1em;
                    margin:auto;
                    display:block;
                    }
                }
                `}</style> 
        </ul>
    )
}