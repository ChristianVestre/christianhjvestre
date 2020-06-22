import { LanguageToggle } from "../shared/languageToggle"
import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../../context/dataContext";
import { MenuRow } from "../shared/menuRow";
import { UiContext } from "../../../context/uiContext";
import { WorkExhibit } from "./workExhibit";
import { useRouter } from 'next/router'
import { SubMenu } from "./subMenu";
import React from "react";




export const DWork = () => {
    const [{ work, menu, language }, setDataState] = useContext(DataContext) as any;
    const [{ style },] = useContext(UiContext) as any;

        const refs = work.reduce((acc, value) => {
            console.log(value[language].headline)
            acc[value[language].headline] = useRef();
            return acc;
        }, {});
        console.log(refs)
        const handleClick = id =>{
        console.log(id)
            refs[id].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }


        return (
            <div className="container">
                <MenuRow imageSrc="/ChristianStudying.png" menuText={menu} language={language}></MenuRow>
                <LanguageToggle setDataState={setDataState} language={language} />
                <SubMenu data={work} language={language} handleClick={handleClick} />
                {work.map((d, i) =>{
                    console.log(refs[d[language].headline])
                    console.log(d[language].headline)
                    return  <WorkExhibit key={i} style={style} data={d[language]} refKey={refs[d[language].headline]}/>
                }
                )}
                <style jsx>{`
            .container{
                width:100%;
                height:100vh;
            }
            `}</style>
            </div>
        )
    }