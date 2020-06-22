export const ImageContainer = ({src}) => (
    <div>
        <img src={src}/>
        <style jsx>{`
            div{
                display:flex;
                justify-content:center;
                width:20vw;
            }
            img{
                margin:0;
                padding:0;
                padding-top:0.5em;
                max-height:20vh;
                max-width:auto;

            }
            
            `}</style>
    </div>


)