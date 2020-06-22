import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import { LanguageToggle } from "../shared/languageToggle";
import { MenuButton } from "./menuButton";

export  const DChristian = () => {
    const [{christian, language},setDataState] = useContext(DataContext) as any;
    return(
        <div className="dChristianContainer">
            <div className="menu">
                <div className="menuPlacement">
                    <MenuButton page={"/index"} text={christian.menu[language].christian} />
                    <MenuButton page={"/work"} text={christian.menu[language].work} />
                    <MenuButton page={"/resume"} text={christian.menu[language].resume} />
                    <MenuButton page={"/interests"} text={christian.menu[language].interests} />
                </div>
            </div>
            <div className="content">
                <div className="headlinePlacement">
                <h1 className="noselect">Christian Vestre</h1>
                </div>
                <img src="/Christian.png" className="noselect"/>
                <LanguageToggle setDataState={setDataState} language={language}/>
                <div className="textPlacement">
                    <h2 className="noselect">{christian.text[language].headline}</h2>
                    <p className="noselect">{christian.text[language].content}</p>
                </div>
            </div>
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
                    p{
                        width:20em;
                        font-size:1.4em;
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
                        position:absolute;
                        bottom:50%;
                        right:0;
                        transform:translate(0,50%);
                        padding-right:8vw;
                    }
                    img{
                        position:absolute;
                        bottom:0;
                        left:50%;
                        transform:translate(-50%,0);
                        margin-bottom:0.45em;
                        width:auto;
                        height:60%;
                    }
                    .headlinePlacement{
                        position:absolute;
                        left:50%;
                        transform:translate(-50%,0)
                    }
                    h1{
                        padding:0;
                        margin:0;
                        font-size:8em;
                        max-width:4em;
                        font-family: 'Work Sans', sans-serif;
                        font-weight:100;
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
                    .menuPlacement{
                        position:relative;
                        top:45%;
                        height:40%;
                    }
                    .menu{
                        height:100%;
                        width:20%;
                    }
                    .dChristianContainer{
                        height:100%;
                        width:100%;
                        position:absolute;
                        display: flex;
                        flex-direction:row;
                    }
                `}
            </style>
        </div>
    )
}