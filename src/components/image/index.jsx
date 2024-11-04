import { useState } from "react";

const Image = ({
  src,
  alt,
  className,
  placeholder,
  width = "auto",
  height = "auto",
  lazy = true,
  style,
  containerStyle,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageError = (e) => {
    e.target.alt = "Image failed to load";
    setLoaded(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div style={containerStyle}>
      {!loaded && placeholder ? (
        <img src={placeholder} alt="placeholder" className="placeholder" />
      ) : (
        <img
          loading={lazy ? "lazy" : "eager"}
          width={width}
          height={height}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          style={style}
          className={className}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default Image;
