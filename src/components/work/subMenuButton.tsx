export const SubMenuButton = ({headline, handleClick, style}) => {
    return(
        <li id="button" onClick={() =>  handleClick(headline) } className="subMenuButtonContainer">
            <div className="centeringContainer">
                <p className="subMenuText">{headline}</p>
            </div>
            <svg  height="5" width="100%" xmlns="http://www.w3.org/2000/svg">
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
                    stroke-dasharray: 100%;
                    stroke-dashoffset: 90%;
                    stroke-linecap:round;
                    transition: 0.3s all ease-out;
                }
                #button:hover #line{
                    stroke-dasharray: 100%;
                    stroke-width: 0.2em;
                    stroke-dashoffset: 0;
                    stroke: ${style.standard.text};
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
                .centeringContainer{
                    width:35vw;
                }
                .subMenuText{
                    font-size:0.9em;
                    text-justify:flex-start;    
                }
                }
                `}</style>
        </li>
    )
}   