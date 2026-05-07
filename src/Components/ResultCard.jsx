const ResultCard = ({ item }) => {
  return (
    <div className="relative">
      <div className="rounded overflow-hidden">
        <a target="_blank" href={item.url}>
          {" "}
          {item.type === "photo" ? (
            <img
              className="md:w-[20vw] object-cover object-center md:h-[35vh]"
              src={item.src}
              alt={item.title}
              loading="lazy"
            />
          ) : (
            ""
          )}
          {item.type === "video" ? (
            <video
              className="md:w-[20vw] md:h-[35vh]"
              autoPlay
              loop
              muted
              preload="none"
              src={item.src}
            />
          ) : (
            ""
          )}
        </a>
      </div>
      <div className="absolute bottom-0 w-full flex items-center justify-center py-2 px-2 bg-linear-to-t  from-black">
        <h2 className="md:text-lg font-semibold">{item.title}</h2>
      </div>
    </div>
  );
};

export default ResultCard;
