import Slider from "react-slick";
import css from 'styled-jsx/css'
var Scroll = require('react-scroll');


export const WorkExhibit = ({ data, style,refKey }) => {
    console.log(refKey)
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
                .sliderContainer{
                    bottom:0;
                    width:90%;
                }
                .carusel{
                    width:65%;
                    height:70vh;
                    display:flex;
                    align-items:center;
                    justify-content:flex-end;
                    flex-direction:column;
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
                    display:flex;
                    flex-direction:row;
                    width:100%;
                    height:90%;
                    border:0.5em solid ${style.standard.border};
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
                }
                p{
                    width:20vw;
                    padding:0;
                    margin:0;
                    font-size:1.2em;
                    text-align: justify;
                    text-justify: inter-word;
                    white-space: pre-line;
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
              `}
            </style>
        </div>
    );
}