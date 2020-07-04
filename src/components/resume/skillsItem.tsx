export const SkillsItem = ({ data, style }) => {
    let rightBar = "none"

    if (data.percent ==! 100) {
        rightBar = "solid 0.2em black"
    }
    return (
        <li className="skillsItemContainer">
            <p className="main">{data.main}</p>
            <div className="skillsGauge">
                <div className="background">
                    <div className="fill" >
                        <div className="insideBar"/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .insideBar{
                    height:70%;
                    width:90%;
                    border-left:solid 0.15em ${style.standard.text};
                    border-bottom:solid 0.15em ${style.standard.text};
                    border-bottom-left-radius:0.3em;
                    margin-left:0.2vw;

                }
                .skillsGauge{
                    width:100%;
                }
                .background{
                    height:3vh;
                    width:100%;
                    border: solid 0.2em black;
                    border-radius:0.5em;
                }
                .fill{
                    background:linear-gradient(#EBD5B3, #BC9E70);
                    height:100%;
                    width:${data.percent + "%"};
                    border-right: ${data.percent !== 100 ? "solid 0.2em black":"none"};
                    border-top-left-radius:0.4em;
                    border-bottom-left-radius:0.4em;
                    border-radius:${data.percent !== 100 ? "none":"0.4em"};
                    display:flex;
                    align-items:center;

                }
                p{
                    margin:0;
                    padding:0;
                }
                .main{
                    font-size:1.5em;
                    text-align:flex-start;
                    align-self:flex-start;

                }
                .space{
                    width:2vw;
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    padding: 0 0.5vw 0 0.5vw;
                }
                .line{
                    width:80%;
                    height:0.25em;
                    background:black;

                }
                .skillsItemContainer{
                    margin:1vh 0;
                    height:auto;
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                @media only screen and (max-width: 760px) {
                    .skillsContainer{
                    grid-area:skillsContent;
                    width:100%;
                    height:auto;
                    margin-top:2vh;
                    }
                }

                `}</style>
        </li>
    )
}