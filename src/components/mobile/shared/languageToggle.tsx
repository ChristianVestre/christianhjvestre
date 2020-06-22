export const LanguageToggle = ({language, setDataState}) => {



    return (
        <div className="languageToggleContainer">
            <button className="no" onClick={ () => (setDataState(state => ({...state,language:"no"}))) }>NO</button>
            <p>/</p>
            <button className="en" onClick={ () => (setDataState(state => ({...state,language:"en"}))) }>EN</button>


            <style jsx>{`
                .languageToggleContainer{
                    display:flex;
                    flex-direction:row;
                    height:100%;
                    width:33vw;
                    align-items:center;
                    justify-content:center;
                }
                button{
                    outline:none;
                    font-size:2em;
                    background:transparent;
                    border:none;
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none;
                    cursor:pointer;
                    margin:0;
                    padding:0;
                }
                .no{
                    color:${language == "no" ? "black":"lightgray"}
                }
                .en{
                    color:${language == "en" ? "black":"lightgray"}
                }
                p{
                    margin:0;

                    padding:0;
                    font-size:2em;
                    bottom:0;
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none;
                }
            `}</style>
        </div>
    )
}