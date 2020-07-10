export const MobileBurgerMenu = ({style, toggleDrawer}) => {

    return(
        <div className="burgerMenuContainer" onClick={() => toggleDrawer()}>
                <div className="line"/>
                <div className="line"/>
                <div className="line"/>
            <style jsx>{`
                .burgerMenuContainer{
                    width:80%;
                    height:90%;
                    display:flex;
                    align-items:center;
                    justify-content:space-evenly;
                    cursor:pointer;
                    flex-direction:column;
                }
                .line{
                    width:50%;
                    height:10%;
                    background:${style.standard.border};
                    padding:0;
                    margin:0;
                }
                
                `}</style>
        </div>
    )
}