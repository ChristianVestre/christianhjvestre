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
                    font-size:1.2em;
                } 
                h3{
                    font-size:2em;
                    margin:0;
                    padding:0;
                }
                img{
                    max-height:100%;
                }
                .imgContainer{
                    grid-area:img;
                    width:100%;
                    height:90%;
                    overflow:hidden;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .interestsContainer{
                    grid-area:interestsContainer;
                    display:grid;
                    justify-content:space-between;
                    align-items:center;
                    height:100%;
                    width:90%;
                    border: solid 0.5em ${style.standard.border};
                    margin:0 5% 0 5%;
                    padding:0 5%;
                    grid-template-columns:1.2fr 0.8fr;
                    grid-template-rows: 1fr;
                    grid-template-areas:
                    'text img'
                }
                @media only screen and (max-width: 760px) {
                    .interestsContainer{
                        width:100%;
                        height:100%;
                        margin:5% 0 0 0;
                        grid-template-columns:1fr;
                        grid-template-rows: 1.5fr 0.5fr;
                        grid-template-areas:
                        'text'
                        'img'  
                    }
                    .textContainer{
                        width:100%;
                        height:auto;
                    }
                    h3{
                        font-size:1.3em;
                    }
                    img{

                        max-width:100%; 
                    }
                    p{
                        font-size:0.9em;
                    }
                    .imgContainer{
                    grid-area:img;
                    width:100%;
                    height:auto;
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