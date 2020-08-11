export const InterestsContainer = ({style, content}) => {

    return (
        <div className="interestsContainer">
            <div className="textContainer">
                <h3>{content.headline}</h3>
                <p>{content.text}</p>
            </div>
            <div className="imgContainer">
                <picture>
                    <source type="image/webp" srcSet={content.image + ".webp"}/>
                    <source type="image/png" srcSet={content.image + ".jpg"}/>
                    <img src={content.image + ".jpg"}/>
                </picture>
            </div>
            <style jsx>{`
                .textContainer{
                    grid-area:text;
                    width:80%;
                    height:90%;
                    overflow-y:scroll;
                    padding:0 2%;
                } 
                p{
                    text-align: left;
                    text-justify: inter-word;
                    white-space: pre-line;
                    font-size:1em;
                } 
                h3{
                    font-size:2em;
                    margin:0;
                    padding:0 0 5% 0;
                }
                img{
                    max-height:100%;
                }
                .imgContainer{
                    width:100%;
                    height:90%;
                    overflow:hidden;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .interestsContainer{
                    grid-area:interestsContainer;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    height:100%;
                    width:90%;
                    border: solid 0.5em ${style.standard.border};
                    margin:0 5% 0 5%;
                    padding:0 5%;

                }
                @media only screen and (max-width: 760px) {
                    .interestsContainer{
                        width:100%;
                        height:100%;
                        margin:5% 0 0 0;
                        display:flex;
                        flex-direction:column;
                    }
                    .textContainer{
                        width:100%;
                        height:auto;
                    }
                    h3{
                        font-size:1.3em;
                        padding: 5% 0 5% 0;
                    }
                    img{

                        max-width:100%; 
                    }
                    p{
                        font-size:0.9em;
                    }
                    .imgContainer{
                    width:100%;
                    height:auto;
                }
                }
                @media only screen and (max-width: 1300px) and (min-width: 760px)  {
                    .interestsContainer{
                    width:100%;
                    border: solid 0.5em ${style.standard.border};
                    padding:0;
                    margin:0;

                }
                }
                `}</style>
        </div>
    )
}

/*

const InterestsManager = (interestsState) =>{
    switch (interestsState) {
        case "aimachinelearning":
            return 
            break;
    
        default:
            break;
    }

}
*/