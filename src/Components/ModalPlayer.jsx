import { nanoid } from "nanoid";
import YouTube from "react-youtube";

export default function ModalPlayer(props) {
  const isMobile = window.innerWidth <= 768; // Check if the viewport width is less than or equal to 768px (adjust as needed)

  const opts = {
    height: isMobile ? "250" : "768", // Adjust height for mobile devices
    width: isMobile ? "360" : "1024", // Adjust width for mobile devices
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(props);
  return (
    <div className="fixed inset-0 flex items-center bg-black bg-opacity-75 z-50">
      <div className="w-full max-w-screen">
        <span
          class="material-symbols-outlined absolute top-3 right-3 text-white text-5xl cursor-pointer"
          onClick={props.handleClose}
        >
          close
        </span>
        <YouTube
          videoId={props.video.key}
          id={nanoid}
          opts={opts}
          className="mx-auto w-fit"
          title={props.video.name}
        />
      </div>
    </div>
  );
}
