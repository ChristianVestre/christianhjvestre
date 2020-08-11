export const SubMenuButton = ({headline, handleClick, style}) => {
    return(
        <li id="button" onClick={() =>  handleClick(headline) } className="subMenuButtonContainer">
            <div className="centeringContainer">
                <p className="subMenuText">{headline}</p>
            </div>
            <svg  height="5" width="80%" xmlns="http://www.w3.org/2000/svg">
                <line id="line" x1="0" x2="100%" y1="50%" y2="50%"></line>
            </svg> 
            <style jsx>{`
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
                    transition: 1s all ease-out;
                }
                #button:hover #line{
                    stroke-dasharray: 500;
                    stroke-width: 0.2em;
                    stroke-dashoffset: 0;
                    stroke: ${style.standard.border};
                }
                .subMenuText{
                    margin:0;
                    padding:0;
                    font-size:1.3em;
                    font-family: 'Open sans';
                    font-weight: 300;
                    color:${style.standard.text}
                }
                .subMenuButtonContainer{
                    display:flex;
                    flex-direction:column;
                    align-items:flex-start;
                    justify-content:center;
                    background-color: Transparent;
                    background-repeat:no-repeat;
                    border: none;
                    cursor:pointer;
                    overflow: hidden;
                    outline:none;
                }
                button::-moz-focus-inner {
                    border: 0;
                }
                button:focus{
                    outline:none;
                    border:none;
                }
                @media only screen and (max-width: 760px) {
                #line{
                    stroke-width:0;
                }
                .centeringContainer{
                    width:35vw;
                }
                .subMenuText{
                    font-size:0.9em;
                    text-justify:flex-start;    
                }
                }
                @media only screen and (max-width: 1300px) and (min-width: 760px)  {
                        h3{
                            font-size:2em;
                        }
                        .subMenuText{
                            margin:0;
                            padding:0;
                            font-size:1em;
                            font-family: 'Open sans';
                            font-weight: 300;
                            color:${style.standard.text}
                        }
                    }
                `}</style>
        </li>
    )
}   