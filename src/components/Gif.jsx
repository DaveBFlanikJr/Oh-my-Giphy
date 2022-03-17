/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Gif = ({ gifId, setSelectID }) => {
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  const handleClick = () => {
    // console.log("click");
    setSelectID(gifId);
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <img
      src={url}
      alt="gif"
      className="gif"
      onClick={handleClick}
    />
  );
};

export default Gif;
