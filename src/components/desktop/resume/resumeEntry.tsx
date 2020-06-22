export const ResumeEntry = ({data,style}) => {

    return(
        <div className="resumeEntryContainer">
            <div className="datesContainer">
                <p className="fromDates">{data.from}</p>
                <p className="toDates">{data.to}</p>
            </div>
            <div className="graphicsContainer">
                <div className="verticalLine"></div>
                <div className="horizontalLine"></div>
                <div className="verticalLine"></div>
            </div>
            <div className="logoContainer">
                <picture>
                    <source type="image/webp" srcSet={data.logo + ".webp"}/>
                    <source type="image/png" srcSet={data.logo + ".png"}/>
                    <img src={data.logo + ".png"}/>
                </picture>
            </div>
            <div className="contentContainer">
                <div className="headlineContainer">
                    <h3>{data.headline}</h3>
                </div>
                <div className="textContainer">
                    <p>{data.text}</p>
                </div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');

                .textContainer::-webkit-scrollbar {
                    display: none;
                }
                .textContainer::-moz-scrollbars{
                    display:none;
                }
                .headlineContainer{
                    display:flex;
                    padding: 3% 0 3% 0;
                    width:70%;
                }
                .textContainer{
                    width:60%;
                    height:90%;
                    margin:0;
                    padding:0;
                    overflow-y:auto;
                    -ms-overflow-style: none;
                    -ms-overflow-style: none;
                    scrollbar-width:none;
                }   
                p{
                    margin:0;
                    padding:0;
                    font-size:1.2em;
                    text-align: justify;
                    text-justify: inter-word;
                    white-space: pre-line;
                    font-family:'Open sans';
                    font-weight:300;
                    color:${style.standard.text};
                }
                h3{
                    margin:0;
                    padding:0;
                    font-size:1.9em;
                    text-align: start;
                    text-justify: inter-word;
                    white-space: pre-line;
                    font-family:'Open sans';
                    font-weight:600;
                    color:${style.standard.text};
                }
                .contentContainer{
                    display:flex;
                    flex-direction:column;
                    width:50%;
                    height:90%;
                    align-items:center;
                    justify-content:center;
                    padding: 1% 0 1% 0;

                }
                .logoContainer{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .verticalLine{
                    width:0.3em;
                    height:50%;
                    background:${style.standard.border};
                    align-self:center;
                }

                .horizontalLine{
                    width:70%;
                    height:0.2em;
                    background:${style.standard.border};
                    align-self:center;
                    margin: 10% 0 10% 0;
                }
                .graphicsContainer{
                    height:100%;
                    width:14%;
                    display:flex;
                    flex-direction:column;
                    align-content:center;
                    justify-content:center;
                }
                .datesContainer{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    width:20%;
                }
                .resumeEntryContainer{
                    display:flex;
                    flex-direction:row;
                    width:100%;
                    height:50vh;
                }
                p{
                    margin:0;
                    padding:0;
                }
                
                `}</style>
        </div>
    )
}
