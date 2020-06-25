import { ResumeEntry } from "./resumeEntry"
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

export const ResumeContent = ({resume, language, style}) => {

    return(
        <section className="resumeContentContainer">
            {resume.map((d,i) => {
                return <ResumeEntry key={i} data={d[language]} style={style}/>
            })}
            
            
            <style jsx>{`
                .resumeContentContainer{
                    width:80%;
                    border: solid 0.5em ${style.standard.border};
                    margin-top:7vh;
                }
                `}
            </style>
        </section>
    )
}