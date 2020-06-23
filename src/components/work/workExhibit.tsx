import Slider from "react-slick";
import css from 'styled-jsx/css'
import { useState } from 'react';
var Scroll = require('react-scroll');


export const WorkExhibit = ({ data, style,refKey,index }) => {
    const [open, setOpenState] = useState("30vh")
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        variableWidth: true,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container" ref={refKey}>
            <div className="textContainer">
                <div className="headlineContainer">
                    <h2>{data.headline}</h2>
                </div>
                <div className="contentContainer">
                    <p>{data.content}</p>
                </div>
                <button className="readMore" onClick={() => {open == "30vh" ? setOpenState("auto"):setOpenState("30vh")}}>
                    <p className="readMoreText">read more</p>
                </button>
            </div>
            <div className="carusel">
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
            </div>
            <style jsx>{`
                .readMore{
                    display:none;
                }
                .sliderContainer{
                    bottom:0;
                    width:90%;
                    margin:0;
                    padding:0;
                }
                .carusel{                        
                    width:60vw;                    font-family:'Open sans'

                    height:70vh;
                    display:flex;
                    align-items:center;
                    justify-content:flex-end;
                    flex-direction:column;
                    margin:0;
                    padding:0;
                    padding-bottom:4%;
                }
                img{
                    width:13vw;
                    padding:2em 1.5em 0 1.5em
                }
                .imageContainer{
                    width:10vh;
                    height:50vh;
                    display:flex;
                    align-content:center;
                    justify-content:center;
                }
                .container{
                    grid-area:${'workExhibit' + index};
                    display:flex;
                    flex-direction:row;
                    width:100%;
                    height:90vh;
                    border:0.5vw solid ${style.standard.border};
                    margin:0;
                    padding:0;
                    align-items:center;

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
                    text-align: justify;
                    text-justify: inter-word;
                    white-space: pre-line;
                    color:${style.standard.text};
                    font-family:'Open sans'

                }
                @media only screen and (max-width: 760px) {
                    .readMore{
                        display:block;
                    }
                    .sliderContainer{
                        bottom:0;
                        width:86vw;
                        height:90%,
                    }
                    .container > :global(.slick-next){
                        right:-15px
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
                        height:50vh;
                        display:flex;
                        align-items:center;
                        justify-content:flex-end;
                        flex-direction:column;
                        padding-bottom:4%;
                    }
                    img{
                        width:auto;
                        height:50vh;
                        padding:2em 1.5em 0 1.5em
                    }
                    .imageContainer{
                        width:4vw;
                        height:50vh;
                        display:flex;
                        align-content:center;
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
                        height:${open};
                        align-content:space-between;
                        margin-bottom:5vh;
                        padding-left:0;
                    }
                    .headlineContainer{
                        display:flex;
                        justify-content:center;
                        align-content:flex-start;
                        padding-bottom:5vh;

                    }
                    .contentContainer{
                        overflow-y:hidden;
                        justify-content:center;
                        align-content:center;
                        display:flex;
                        height:${open};
                        
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
                        font-size:1.2em;
                        text-align: justify;
                        text-justify: inter-word;
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
        </div>
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