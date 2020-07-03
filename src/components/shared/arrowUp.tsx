export const ArrowUp = () => (
    <div className="arrowContainer">
        <div className="right"/>
        <div className="left"/>
        <style jsx>{`
            .arrowContainer{
                height:100%;
                width:80%;
                margin:0;
                padding:0;
            }
            .left{
                position:absolute;
                right:0;
                top:40%;

                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                background:black;
                height:7%;
                width:60%;
                
            }
            .right{
                position:absolute;
                left:0;
                top:40%;
                -webkit-transform: rotate(315deg);
                -moz-transform: rotate(315deg);
                -o-transform: rotate(315deg);
                -ms-transform: rotate(315deg);
                transform: rotate(315deg);
                background:black;
                height:7%;
                width:60%;
            }
            `}</style>
    </div>
)