import { MobileBurgerMenu } from "./mobileBurgerMenu"
import { LanguageToggle } from "./languageToggle"

export const MobileNavBar = ({style,setDataState,language,setDrawerState}) => {

    return(
        <nav className="navBarMobile">
            <MobileBurgerMenu style={style} toggleDrawer={() => {setDrawerState(true)}} />
            <h4 className="noselect">Christian Vestre</h4>
            <LanguageToggle setDataState={setDataState} language={language} fontSize={1.6} />
            <style jsx>{`
            .navBarMobile{
                            grid-area:nav;
                            height:10vh;
                            width:100vw;
                            border-bottom: solid 0.5em ${style.standard.border};
                            display:grid;
                            grid-template-columns:1fr 1fr 1fr;
                            justify-content:center;
                            align-items:center;
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
                        @media only screen and (min-width: 760px) {
                            .navBarMobile{
                                display:none;
                            }
                        }
                
                `}
                
            </style>
        </nav>
    )
}