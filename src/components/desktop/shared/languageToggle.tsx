export const LanguageToggle = ({language, setDataState}) => {



    return (
        <div className="container">
            <button className="no" onClick={ () => (setDataState(state => ({...state,language:"no"}))) }>NO</button>
            <p>/</p>
            <button className="en" onClick={ () => (setDataState(state => ({...state,language:"en"}))) }>EN</button>


            <style jsx>{`
                .container{
                    display:flex;
                    flex-direction:row;
                    height:3em;
                    width:4em;
                    position:absolute;
                    top:1%;
                    right:15%;
                }
                button{
                    outline:none;
                    font-size:3em;
                    background:transparent;
                    border:none;
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none;
                    cursor:pointer;
                }
                .no{
                    color:${language == "no" ? "black":"lightgray"}
                }
                .en{
                    color:${language == "en" ? "black":"lightgray"}
                }
                p{
                    margin:0;
                    margin-top:0.05em;
                    padding:0;
                    font-size:3em;
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