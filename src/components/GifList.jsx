import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds, setSelectID } = props;
  return (
    <div className="gif-list">
      { gifIds.map(
        (gifId) => <Gif gifId={gifId} key={gifId} setSelectID={setSelectID} />
      )}
    </div>
  );
};

export default GifList;
