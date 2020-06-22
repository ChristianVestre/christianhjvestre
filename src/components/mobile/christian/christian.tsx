import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import { LanguageToggle } from "../shared/languageToggle";
import { UiContext } from "../../../context/uiContext";

export  const MChristian = () => {
    const [{christian, language},setDataState] = useContext(DataContext) as any;
    const [{style},] = useContext(UiContext) as any;
    return(
        <div className="mChristianContainer">
                <nav id="navBar">
                    <div className="navContainer">
                    <div className="menu"></div>
                    <h4 className="noselect">Christian Vestre</h4>
                    <LanguageToggle setDataState={setDataState} language={language}/>
                    </div>
                </nav>
                <div className="headlinePlacement">
                </div>

                <div className="textPlacement">
                    <h2 className="noselect">{christian.text[language].headline}</h2>
                    <p className="noselect">{christian.text[language].content}</p>
            </div>
                <img src="/Christian.png" className="noselect"/>

            <style jsx>{`
                    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');

                    .noselect{
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                    }
                    .menu{
                        height:100%;
                        width:100%;
                        background:blue;
                    }
                    .navContainer{
                        height:10vh;
                        width:100vw;
                        border-bottom: solid 0.5em ${style.standard.border};
                        display:grid;
                        grid-template-columns:1fr 1fr 1fr;
                        justify-content:center;
                        align-items:center;
                    }
                    p{
                        width:80%;
                        font-size:1.1em;
                        text-align: justify;
                        text-justify: inter-word;
                        white-space: pre-line;
                        margin:0;
                        padding:0;
                        color:#535353;

                    }
                    h2{
                        font-size:5em;
                        padding:0;
                        margin:0;
                        text-align:center;
                        color:#535353;
                    }
                    .textPlacement{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        padding-bottom:5vh;
                    }
                    img{
                        position:relative;
                        bottom:0;
                        left:50%;
                        transform:translate(-50%,0);
                        margin-bottom:0.45em;
                        max-width:20em;
                        max-height:60vh;
                    }
                    .headlinePlacement{
                        position:relative;
                        left:50%;
                        transform:translate(-50%,0);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    h4{
                        padding:0;
                        margin:0;
                        font-size:1.4em;
                        font-family: 'Work Sans', sans-serif;
                        font-weight:600;
                        text-decoration:underline;
                        text-decoration-color: #535353;
                        color:#535353;
                    }
                    .content{
                        width:80%;
                        height:100%;
                        border: solid 0.5em #EBD5B3;
                    }
                    h3{
                        padding-left:1em;
                        font-size:4em;
                        padding:0;
                        padding-top:1em;
                        margin:0;
                        font-family: 'Work Sans', sans-serif;
                        color:#535353;

                    }
                    .mChristianContainer{
                        display: flex;
                        flex-direction:column;
                        height:100vh;
                        width:100vw;

                    }
                `}
            </style>
        </div>
    )
}