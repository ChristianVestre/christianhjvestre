export const ResumeEntry = ({data,style}) => {

    return(
        <article className="resumeEntryContainer">
            <section className="datesContainer">
                <p className="fromDates">{data.from}</p>
                <div className="dash"/>
                <p className="toDates">{data.to}</p>
            </section>
            <section className="graphicsContainer">
                <div className="verticalLine"></div>
                <div className="horizontalLine"></div>
                <div className="verticalLine"></div>
            </section>
            <section className="logoContainer">
                <picture>
                    <source type="image/webp" srcSet={data.logo + ".webp"}/>
                    <source type="image/png" srcSet={data.logo + ".png"}/>
                    <img src={data.logo + ".png"}/>
                </picture>
            </section>
            <section className="headlineContainer">
                <h3>{data.headline}</h3>
            </section>
            <section className="textContainer">
                <p>{data.text}</p>
            </section>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');

                .textContainer::-webkit-scrollbar {
                    display: none;
                }
                .textContainer::-moz-scrollbars{
                    display:none;
                }
                .dash{
                    display:none;
                }
                .headlineContainer{
                    grid-area:headline;
                    display:flex;
                    justify-content:center;
                    padding: 3% 0 3% 0;
                    width:100%;
                }
                .textContainer{
                    grid-area:text;
                    display:flex;
                    justify-content:center;
                    width:100%;
                    height:100%;
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
                    white-space: pre-line;
                    font-family:'Open sans';
                    font-weight:300;
                    color:${style.standard.text};
                }
                h3{
                    margin:0;
                    padding:0;
                    font-size:1.9em;

                    white-space: pre-line;
                    font-family:'Open sans';
                    font-weight:600;
                    color:${style.standard.text};
                    width:80%;
                }
                .logoContainer{
                    grid-area:logo;
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
                    grid-area:graphics;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    align-content:center;
                    justify-content:center;
                }
                .datesContainer{
                    grid-area:dates;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    
                }
                .resumeEntryContainer{
                    width:100%;
                    height:50vh;
                    display:grid;
                    grid-template-columns:1fr 1fr 1fr 5fr;
                    grid-template-rows:0.3fr 0.7fr;
                    grid-template-areas:
                    'dates graphics logo headline'
                    'dates graphics logo text'
                }
                p{
                    margin:0;
                    padding:0;
                    width:80%;
                }
                @media only screen and (max-width: 760px) {
                    .resumeEntryContainer{
                    grid-area:skillsContent;
                    width:100%;
                    height:150vh ;
                    margin-top:0vh;
                    display:grid;
                    align-content:center;
                    justify-content:center;
                    grid-template-columns:1fr;
                    grid-template-rows:0.2fr 0.2fr 0.2fr 0.4fr 0.4fr;
                    grid-template-areas:
                    'headline'
                    'logo'
                    'dates'
                    'text'
                    'graphics'
                }
                .graphicsContainer{
                    grid-area:graphics;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    align-content:center;
                    justify-content:center;
                }
                .verticalLine{
                    width:0.3em;
                    height:25%;
                    background:${style.standard.border};
                    align-self:center;
                }
                .horizontalLine{
                    width:40%;
                    height:0.2em;
                    background:${style.standard.border};
                    align-self:center;
                    margin: 10% 0 10% 0;
                }
                .textContainer{
                    grid-area:text;
                    width:90%;
                    height:100%;
                    display:flex;
                    justify-self:center;
                }   
                .headlineContainer{
                    width:90%;
                    height:auto;
                    display:flex;
                    justify-self:center;
                    align-self:center;
                }
                h3{
                    width:100%;
                    font-size:1.7em;
                    text-align:center;
                }
                p{
                    width:100%;
                    height:auto;
                    text-align: justify;
                    text-justify: inter-word;
                    font-size:1.1em;
                }
                .logoContainer{
                    grid-area:logo;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .datesContainer{

                    flex-direction:row;
                    width:90%;
                    justify-content:space-between;
                    justify-self:center;
                    align-self:center;
                }
                img{
                    width:100%;
                }
                .fromDates{
                    font-size:1.3em;
                    font-weight:600;
                    width:45%;
                    display:flex;
                    justify-self:center;
                    justify-content:center;
                }
                .toDates{
                    font-size:1.3em;
                    font-weight:600;
                    width:45%;
                    display:flex;
                    justify-self:center;
                    justify-content:center;
                }
                .dash{
                    display:block;
                    height:0.5vh;
                    width:5vw;
                    background:${style.standard.text};
                }
                
                    }
                }
                `}</style>
        </article>
    )
}
