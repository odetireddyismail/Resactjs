import YouTube from "react-youtube";

export const Play = (props) => {
  const { listYoutubeVideos } = props;
   
  //console.log(listYoutubeVideos)
  const opts = {
    height: "300",
    width: "400",

    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="m-4">
      <ul className="list-unstyled">
        {listYoutubeVideos.map((ele) => {
          return (
            <>
              <div className="d-flex">
                <li key={ele.etag} className="mb-3">
                  <YouTube
                    videoId={ele.snippet.resourceId.videoId}
                    opts={opts}
                    onReady={onReady}
                  />
                  {/* <iframe src={`https://www.youtube.com/embed/${ele.snippet.resourceId.videoId}`}
                                        frameborder='0'
                                        width="400" height="300"
                                        allow='autoplay; encrypted-media'
                                        title='video'
                                    /> */}
                </li>
                <li className="p-3">{ele.snippet.description}</li>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};