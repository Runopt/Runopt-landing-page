import { useState } from 'react';

interface VideoPopupProps {
  videoId: string;
  thumbnail: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoId, thumbnail }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="video-container" onClick={() => setIsOpen(true)}>

        <img src={thumbnail} alt="Video Thumbnail" />
        <div className="play-button">
          <button title='play'>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.710938 3.88941V16.0849C0.710938 18.5826 3.42529 20.1501 5.59168 18.9012L10.8802 15.8555L16.1687 12.7971C18.3351 11.5482 18.3351 8.42608 16.1687 7.17722L10.8802 4.11879L5.59168 1.07311C3.42529 -0.17575 0.710938 1.37895 0.710938 3.88941Z"
                fill="white"
              />
            </svg>
          </button>
        </div>


      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              title="close"
            >
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.51471 26.0005L25.4853 9.02993"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.51473 9.02993L25.4853 26.0005"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <iframe
              className="video-frame"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
