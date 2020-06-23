

import { SubMenuButton } from "./subMenuButton"
import { useState } from "react"

export const SubMenu = ({data,language, handleClick, style}) => {

    return(
        <div className="subMenuContainer">
            {data.map((d, i) => {
                return <SubMenuButton
                        key={i}
                        headline={d[language].headline}
                        handleClick={handleClick}
                        style={style}
                        />
            })}
            
            <style jsx>{`
                .subMenuContainer{
                    grid-area:subMenu;
                    padding-top:2vh;
                    height:18vh;
                    display:flex;
                    display:grid;
                    margin:0 5% 0 5%;
                    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
                    grid-row-gap:2.5vh;
                    align-items:center;
                    justify-content:center;

                }

                `}</style>
        </div>
    )

}