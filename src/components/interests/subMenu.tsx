import { SubMenuButton } from "./subMenuButton"
import { useState } from "react"

export const SubMenu = ({subMenu, setInterestsState, interestsState, style}) => {

    return(
        <nav className="subMenuContainer">
            {subMenu.map((d, i) => {
                return <SubMenuButton
                        key={i}
                        text={d.headline}
                        dataKey={d.dataKey}
                        setInterestsState={setInterestsState}
                        interestsState={interestsState}
                        style={style}
                        />
            })}
            
            <style jsx>{`
                .subMenuContainer{
                    padding-top:2vh;
                    height:18vh;
                    display:flex;
                    display:grid;
                    margin:0 5% 0 5%;
                    grid-template-columns:1fr 1fr 1fr 1fr;
                    grid-row-gap:2.5vh;
                    align-items:center;
                    justify-content:center;
                }

                @media only screen and (max-width: 760px) {
                    .subMenuContainer{
                        width:100%;
                        height:100%;
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        margin:0;
                    }
                }

                `}</style>
        </nav>
    )

}