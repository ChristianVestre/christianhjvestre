export const SubMenuButton = ({text,dataKey, setInterestsState,interestsState, style}) => {

    return(
        <li id="button" onClick={() => setInterestsState(dataKey)} className="subMenuButtonContainer">
                <section className="content">
                    <div className="selected"/>
                    <p>{text}</p>
                </section>
                <svg  height="5" width="60%" xmlns="http://www.w3.org/2000/svg">
                <line id="line" x1="0" x2="100%" y1="50%" y2="50%"></line>
                </svg> 
            <style jsx>{`
                .selected{
                    display:${ dataKey === interestsState? "block":  "none"};
                    height:1.3em;
                    width:1.3em;
                    background:${dataKey == interestsState ? style.standard.border : "transparent"};
                    align-self:center;
                    margin:0;
                    margin-right:1vw;
                }
                .content{
                    display:flex;
                    flex-direction:row;
                }
                .centeringContainer{
                    display:flex;
                    width:15vw;
                }
                #line{
                    stroke-width:0.2em;
                    stroke:transparent;
                    stroke-dasharray: 500;
                    stroke-dashoffset: 500;
                    stroke-linecap:round;
                    transition: 0.5s all ease-out;
                }
                #button:hover #line{
                    stroke-dasharray: 500;
                    stroke-width: 0.2em;
                    stroke-dashoffset: 0    ;
                    stroke: ${style.standard.border};
                }
                p{
                    text-align:left;
                    margin:0;
                    padding:0;
                    font-size:1.3em;
                    font-family: 'Open sans';
                    font-weight: 300;
                }
                .subMenuButtonContainer{
                    display:flex;
                    flex-direction:column;
                    align-items:flex-start;
                    justify-content:flex-start;
                    background-color: Transparent;
                    background-repeat:no-repeat;
                    border: none;
                    cursor:pointer;
                    overflow: hidden;
                    outline:none;
                    padding-left:25%;
                }

                button::-moz-focus-inner {
                    border: 0;
                }
                button:focus{
                    outline:none;
                    border:none;
                }
                @media only screen and (max-width: 760px) {
                    .subMenuButtonContainer{
                        width:100%;
                        margin:0 5%;
                        padding:0;
                        justify-content:flex-start;
                        align-items:flex-start;
                    }
                    #line{
                        stroke-width:0;
                    }
                    #button:hover #line{
                        stroke-width:0;
                    }
                    p{
                        font-size:0.8em;
                        text-overflow: ellipsis;                          
                        max-lines:1;
                    }
                }

                `}</style>
        </li>
    )
}