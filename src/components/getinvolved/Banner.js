const Banner =(props) =>{
    console.log(props);
    var divImage = {
        backgroundImage : "url(" + props.bannerdata.img + ")", 
        backgroundSize: '100% 100%'
      };
    
    return(
        <>
        <div className="background-banner margin-top" style={divImage} >
            <div className="banner-text">
                <h2 className="banner-heading">{props.bannerdata.title}<span className="dark"> &nbsp;{props.bannerdata.darktitle}</span></h2>
                <p className="banner-subtitle">{props.bannerdata.subtitle}</p>
            </div>
        </div>
        <div className="banner-bottom"></div>
        </>
    )
}
export default Banner;