import Slider from "react-slick";
import css from 'styled-jsx/css'
import { useState } from 'react';
import { ReadMoreButton } from "../shared/readMoreButton";
var Scroll = require('react-scroll');


export const WorkExhibit = ({ data,menu ,style,refKey,index,language }) => {
    const closedSize = "30vh"
    const [open, setOpenState] = useState("30vh")
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight:true,

        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <article className="container" ref={refKey}>
            <section className="textContainer">
                <div className="headlineContainer">
                    <h2>{data.headline}</h2>
                </div>
                <div className="contentContainer">
                    {data.content.length >= 300 ? <p>{data.content.slice(0,300)}<span id="dots">....</span><span id="more">{data.content.slice(300,)}</span></p>:<p> {data.content}</p>}
                </div>
                {data.content.length >= 300 ? <ReadMoreButton language={language} style={style} open={open} closedSize={closedSize} setOpenState={setOpenState} menu={menu} type="read" />:null}
            </section>
            {data.images.length > 1 ? <section className="carusel">
                <div className="sliderContainer">
                    <Slider {...settings} className="slider" >
                        {data.images.map(src => 
                        {return(<div className="imageContainer" key={src}>
                            <picture>
                                <source type="image/webp" srcSet={src + ".webp"}/>
                                <source type="image/png" srcSet={src + ".png"}/>
                                <img src={src + ".png"}/>
                            </picture>
                        </div>)})
                        }

                    </Slider>
                </div>
            </section>
            :
            <section className="singleImageSection">
                <picture>
                    <source type="image/webp" srcSet={data.images[0] + ".webp"}/>
                    <source type="image/png" srcSet={data.images[0] + ".png"}/>
                    <img className="singleImage" src={data.images[0] + ".png"}/>
                </picture>
            </section>}
            <style jsx>{`
                .singleImage{
                    width:auto;
                    max-width:100%;
                    height:auto;
                    max-height:100%;
                }
                .singleImageSection{
                    width:60vw;
                    height:auto;
                    padding: 0 2em;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .dash{
                        display:none;
                }
                #dots{
                        display:none;
                        }
                .readMore{
                    display:none;
                }
                .sliderContainer{
                    bottom:0;
                    width:90%;
                    margin:0;
                    padding:0
                }
                .carusel{                        
                    width:60vw;                    
                    font-family:'Open sans';
                    max-height:70vh;
                    height:auto;
                    display:flex;
                    align-items:center;
                    justify-content:flex-end;
                    flex-direction:column;
                    margin:0;
                    padding:0;
                    padding-bottom:4%;
                }
                img{
                    width:auto;
                    max-width:60vw;
                    height:auto;
                    max-height:60vh;
                    padding: 0 2em;
                }
                .imageContainer{
                    
                    display:flex;
                    align-content:center;
                    justify-content:center;
                }
                .container{
                    scrollbar-color: ${style.standard.border} white;
                    overflow: overlay;
                    grid-area:${'workExhibit' + index};
                    display:flex;
                    flex-direction:row;
                    width:100%;
                    height:90vh;
                    border:0.5vw solid ${style.standard.border};
                    margin:0;
                    padding:0;
                    align-items:center;
                    justify-content:space-between;

                }
                .textContainer{
                    display:flex;
                    flex-direction:column;
                    width:35%;
                    height:90%;
                    align-content:space-between;
                    padding-left:5vw;
                }
                .headlineContainer{
                    display:flex;
                    justify-content:center;
                    align-content:flex-start;
                    padding-bottom:5vh;
                }
                .contentContainer{
                    overflow-y:scroll;
                    justify-content:center;
                    align-content:center;
                    display:flex;
                }
                h2{
                    font-size:3em;
                    padding:0;
                    margin:0;
                    color:${style.standard.text};
                    font-family:'Open sans'
                }
                p{
                    width:24vw;
                    padding:0;
                    margin:0;
                    font-size:1.4em;
                    white-space: pre-line;
                    color:${style.standard.text};
                    font-family:'Open sans'

                }
                @media only screen and (max-width: 760px) {
                    .singleImage{
                        width:100%;
                        height:auto;
                        transform:none;
                        bottom:none;
                    }
                    .singleImageSection{
                        width:100%;
                        height:50%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    #more{
                        display:${open == closedSize?"none":"inline"};
                    }
                    #dots{
                        display:${open == closedSize?"inline":"none"};
                        }
                    .readMore{
                        display:block;
                        width:40vw;
                    }
                    .sliderContainer{
                        bottom:0;
                        width:90vw;
                        height:100%;
                        padding:5%;
                    }
                    .container > :global(.slick-next){
                        right:-15px
                    }
                    .container > :global(.slick-dots){
                        bottom: -10px;
                    }
                    button{
                        outline:none;
                        background:transparent;
                        background-color: Transparent;
                        background-repeat:no-repeat;
                        border: none;
                        cursor:pointer;
                        overflow: hidden;
                        width:30vw;
                        height:6em;
                        margin:0;
                        padding:0;
                        align-self:flex-end;
                    }
                    button:active{
                        outline:none;
                    }
                    button::-moz-focus-inner { border:0; }
                    .carusel{
                        width:90vw;
                        height:auto;
                        display:flex;
                        align-items:center;
                        justify-content:flex-end;
                        flex-direction:column;
                        margin-bottom:2em;
                    }
                    img{
                        width:auto;
                        max-width:85vw;
                        max-height:90%;
                        bottom:50%;
                        padding:${data.landscape ? "0":"0 2em"};
                    }
                    .imageContainer{
                        max-height:100%;
                        display:flex;   
                        align-items:center;
                        justify-content:center;
                    }
                    .container{
                        grid-area:${'workExhibit' + index};
                        display:flex;
                        flex-direction:column;
                        width:100vw;
                        height:auto;
                        border:0.5em solid ${style.standard.border};
                        border-right:0;
                        border-left:0;
                        margin:0;
                        padding:0;
                        align-items:center;
                    }
                    .textContainer{
                        display:flex;
                        flex-direction:column;
                        width:100%;
                        height:auto;
                        align-content:space-between;
                        padding-left:0;
                    }
                    .headlineContainer{
                        display:flex;
                        justify-content:center;
                        align-content:flex-start;
                        padding-bottom:5vh;
                        overflow:hidden;

                    }
                    .contentContainer{
                        overflow-y:hidden;
                        justify-content:center;
                        align-content:center;
                        display:flex;
                        height:auto;
                        
                    }
                    h2{
                        font-size:1.6em;
                        padding:0;
                        margin:0;
                        font-family:'Open sans';
                        font-weight:600;
                        color:${style.standard.text}
                    }
                    p{
                        width:80%;
                        padding:0;
                        margin:0;
                        font-size:1em;
                        white-space: pre-line;
                        font-family:'Open sans';
                        font-weight:300;
                        color:${style.standard.text};
                    }
                    .readMoreText{
                        font-size:1.5em;
                        
                    }
                }

                `}</style>
        </article>
    )
}

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <style jsx>{`
                div::before{
                    width:3em;
                    height:3em;
                    border-radius:50%;
                    background:white;
                    color:#535353;
                    font-size:1.2vw;
                }
                @media only screen and (max-width: 760px) {
                    div::before{
                    font-size:3vh;
                }
                }
              `}
            </style>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <style jsx>{`
                div::before{
                    width:3em;
                    height:3em;
                    border-radius:50%;
                    background:white;
                    color:#535353;
                    font-size:1.2vw;
                }
                @media only screen and (max-width: 760px) {
                    div::before{
                    font-size:3vh;
                }
              `}
            </style>
        </div>
    );
}