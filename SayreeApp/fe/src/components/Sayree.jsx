import React, { useEffect, useState } from "react";
import "./Sayree.css";

function Sayree() {
  const [keyword, setKeyword] = useState("");
  const [shayari, setShayari] = useState("");
  const [loading, setLoading] = useState(false);

  const generateShayari = async () => {
    setLoading(true);
    try {
      const url = `https://healthy-crab-smock.cyclic.app/shayari?keyword=${keyword}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          //   console.log(data);
          setShayari(data.shayari);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Error:", error);
      setShayari("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Shayari App</h1>
      <input
        type="text"
        class="input-box"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <br />
      <br />
      <button onClick={generateShayari} className="submit-button">
        Generate Shayari
      </button>

      <br />
      <br />
      {loading ? (
        <div className="shayari">
          <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" />
        </div>
      ) : (
        <div className="shayari">{shayari}</div>
      )}
    </div>
  );
}

export default Sayree;
//jj
