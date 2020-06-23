export const SubMenuButton = ({text,dataKey, setInterestsState,interestsState, style}) => {

    return(
        <div onClick={() => setInterestsState(dataKey)} className="subMenuButtonContainer">
            <div className="centeringContainer">
                <div className="selected"/>
                <p>{text}</p>
                </div>
            <style jsx>{`
                .selected{
                    height:1.3em;
                    width:1.3em;
                    background:${dataKey == interestsState ? style.standard.border : "transparent"};
                    align-self:center;
                    margin:0;
                    margin-right:1vw;
                }
                .centeringContainer{
                    display:flex;
                    width:15vw;
                }
                p{
                    margin:0;
                    padding:0;
                    font-size:1.3em;
                    font-family: 'Open sans';
                    font-weight: 300;
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
                `}</style>
        </div>
    )
}