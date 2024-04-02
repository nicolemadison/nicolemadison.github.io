const src =
"https://ribbonfish.co.uk/wp-content/uploads/2024/01/Ribbonfish-Video-1.25-Speed.mp4"

const Video = () => {
    return (
        <div className="align-self-center ms-md-5 m-sm-0 p-sm-0 ps-md-5" >
            <video controls width="85%" autoPlay muted loop>
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
        
    );
};
  
  export default Video;