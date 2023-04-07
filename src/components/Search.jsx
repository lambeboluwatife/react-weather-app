import { useState } from "react";
import Outfits from "../outfits.json";
const Search = ({ getSearch, weatherData }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Enter a location");
    }

    getSearch(search);

    setSearch("");
  };

  const outfits = Outfits.filter(
    (outfit) => outfit.type === weatherData.weather[0].description
  );
  const newOutfit = outfits.map((outfit) => outfit.description);

  return (
    <div className="grid">
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="outfit">
        <h6>
          <strong>Outfit Recommendation: </strong>
        </h6>
        <h6>{newOutfit}</h6>
      </div>
    </div>
  );
};

export default Search;
