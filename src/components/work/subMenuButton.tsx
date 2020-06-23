export const SubMenuButton = ({headline, handleClick, style}) => {
    console.log(style.isMobile)
    return(
        <div onClick={() =>  handleClick(headline) } className="subMenuButtonContainer">
            <div className="centeringContainer">
                <p className="subMenuText">{headline}</p>
            </div>
            <style jsx>{`

                .centeringContainer{
                    display:flex;   
                    width:15vw;
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
                    flex-direction:row;
                    align-items:center;
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
                }
                }
                `}</style>
        </div>
    )
}   