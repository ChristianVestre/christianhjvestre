

import { SubMenuButton } from "./subMenuButton"
import { useState } from "react"

export const SubMenu = ({data,language, handleClick, style}) => {

    return(
        <nav className="subMenuContainer">
            <h2>Quick navigation</h2>
            <ul className="subMenuGrid">
            {data.map((d, i) => {
                return <SubMenuButton
                        key={i}
                        headline={d[language].headline}
                        handleClick={handleClick}
                        style={style}
                        />
            })}
            </ul>
            <style jsx>{`
                h2{display:none}

                .subMenuContainer{
                    grid-area:subMenu;
                    display:flex;
                    flex-direction:column;
                    height:100%;
                    width:100%;
                }
                .subMenuGrid{
                    margin:0;
                    padding:0;
                    height:18vh;
                    display:grid;
                    padding-left:5%;
                    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
                    grid-row-gap:2.5vh;
                    align-items:center;
                    justify-content:center;
                }
                @media only screen and (max-width: 760px) {
                    h2{
                        display:block;
                        margin:0;
                        height:0;
                        width:100%;
                        text-align:center;
                        color:${style.standard.text};  
                        font-size: 0.9em;
                        font-family:'Open sans';
                        margin:1vh 0;
                    }
                    .subMenuGrid{
                        height:30vh;
                        display:grid;
                        width:90%;
                        margin:5% 5% 5% 5%;
                        grid-template-columns:1fr 1fr;
                        padding:0;
                        grid-template-rows:0.33fr 0.33fr 0.33fr;
                        grid-row-gap:2.5vh;
                        align-items:space-between;
                        justify-content:center;
                    }
                }

                `}</style>
        </nav>
    )

}