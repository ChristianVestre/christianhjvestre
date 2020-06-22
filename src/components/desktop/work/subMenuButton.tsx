
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;


export const SubMenuButton = ({headline, handleClick}) => {

    return(
        <div onClick={() =>  handleClick(headline) } className="subMenuButtonContainer">
            <div className="centeringContainer">
                <p>{headline}</p>
            </div>
            <style jsx>{`

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