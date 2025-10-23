import "./VideoListing.css";

const videos = [
  "aQ0yOmtl96A", // Remplace par tes propres IDs de vidéos
  "ruth--ZlG8I",
  "BMCILD3tHA8",
  "oNFTXAgzjOQ",
  "h_iLM3G_jj8",
  "UKrjOMuBVMo",
  "BUKiff-ei1g",
  "63MDVd3rR8M",
  "FMYmZxVSims",
  "G8f-kUoGcQk",
  "l60RPlcbpUI",
  "LyAsXMRtYlc",
  "N1X3mdGfEg4",
  "9D9lmU1aH1E",
];

const YoutubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const VideoListing = () => {
  return (
    <div className="video">
      {videos.map((id) => (
        <YoutubeEmbed key={id} videoId={id} />
      ))}
    </div>
  );
};

export default VideoListing;
