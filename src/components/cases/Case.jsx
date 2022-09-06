const Case = ({ position, image, title, link, subtitle, text }) => {
  return (
    <div className="case">
      {position == "left" && (
        <div className="image-wrapper">
          <img loading="lazy" className="case-image" src={image} />
        </div>
      )}
      <div className="case-info">
        <h3>{title}</h3>
        <span className="case-title">{subtitle}</span>
        <p> {text}</p>
        <a href={link}>Se side</a>
      </div>

      {position == "right" && (
        <div className="image-wrapper">
          <img loading="lazy" className="case-image" src={image} />
        </div>
      )}
    </div>
  );
};

export default Case;
