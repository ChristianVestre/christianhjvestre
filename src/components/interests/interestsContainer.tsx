export const InterestsContainer = ({style, content}) => {

    return (
        <div className="interestsContainer">
            <div className="textContainer">
                <h3>{content.headline}</h3>
                <p>{content.text}</p>
            </div>
            <div className="imgContainer">
                <img src={content.image}/>
            </div>
            <style jsx>{`
                .textContainer{
                    grid-area:text;
                    width:80%;
                    height:90%;
                    overflow-y:scroll;
                    padding:0 5%;
                } 
                p{
                    text-align: left;
                    text-justify: inter-word;
                    white-space: pre-line;
                    font-size:1.1em;
                } 
                h3{
                    font-size:2em;
                }
                img{
                    max-height:100%;
                }
                .imgContainer{
                    grid-area:img;
                    width:40vw;
                    height:90%;
                    overflow:hidden;
                }
                .interestsContainer{
                    grid-area:interestsContainer;
                    display:grid;
                    justify-content:space-between;
                    align-items:center;
                    height:60vh;
                    width:90%;
                    border: solid 0.5em ${style.standard.border};
                    margin:2vh 5% 0 5%;
                    padding:0 5%;
                    grid-template-columns:1.4fr 0.6fr;
                    grid-template-rows: 2fr;
                    grid-template-areas:
                    'text img'
                }
                @media only screen and (max-width: 760px) {
                    .interestsContainer{
                        width:100%;
                        height:100%;
                        margin:5% 0 0 0;
                        grid-template-columns:1fr;
                        grid-template-rows: 1.4fr 0.6fr;
                        grid-template-areas:
                        'text'
                        'img'  
                    }
                    p{
                        font-size:0.9em;
                    }
                    .imgContainer{
                    grid-area:img;
                    width:100%;
                    height:40vh;
                    background:blue;
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