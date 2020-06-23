export const InterestsContainer = ({style, content}) => {

    return (
        <div className="interestsContainer">
            <div className="textContainer">
                <h3>{content.headline}</h3>
                <p>{content.text}</p>
            </div>
            <div className="imgContainer">
                
            </div>
            <style jsx>{`
                .textContainer{

                }
                .imgContainer{
                    width:30vw;
                    height:90%;
                    background:blue;
                }
                .interestsContainer{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    height:60vh;
                    width:90%;
                    border: solid 0.5em ${style.standard.border};
                    margin:2vh 5% 0 5%;
                    padding:0 5%;
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