export const ReadMoreButton = ({ open, closedSize, menu, language, setOpenState,style,type }) => (
    <button className="readMore" onClick={() => { open == closedSize ? setOpenState("auto") : setOpenState(closedSize) }}>
        <p className="readMoreText">{open == closedSize ? menu[language][type + "More"] : menu[language][type+"Less"]}</p>
        <style jsx>{`
        p{
                        width:30%;
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
        .readMore{
                    display:none;
                }
                        @media only screen and (max-width: 760px) {
                            .readMore{
                                display:flex;
                                width:100vw;
                                justify-content:flex-end;
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
                    }
            `}</style>
    </button>

)