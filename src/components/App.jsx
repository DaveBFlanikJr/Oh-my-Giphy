import React, { useState } from 'react'; // use == Hook
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';
// by using short cut rsc you get this boiler plate

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedID, setSelectID] = useState("13HgwGsXF0aiGY");
  const [gifIDs, setGifIDs] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  // const selectedID = "13HgwGsXF0aiGY";
  // const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

  const changeGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifs = res.data.map((gif) => gif.id);
      setGifIDs(gifs);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={changeGifs} />
        <div className="selected-gif">
          <Gif gifId={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIDs} setSelectID={setSelectID} />
      </div>
    </div>
  );
};

export default App;
