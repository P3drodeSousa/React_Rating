import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import great from "./assets/great.png";
import happy from "./assets/happy.png";
import ok2 from "./assets/great.png";
import ok from "./assets/ok.png";
import bad from "./assets/bad.png";

function App() {
  const [rating, setRating] = useState(3.1);
  const [color, setColor] = useState("#ffea02");

  let lastMonth = 4.2;
  let total = (rating - lastMonth).toFixed(1);

  useEffect(() => {
    displayImg(rating);
  }, [rating]);

  const displayImg = (rating) => {
    switch (true) {
      case rating >= 4 && rating <= 5:
        setColor("red");
        return (
          <img style={{ height: "300px", width: "300px" }} src={happy} alt="" />
        );
      case rating > 3 && rating < 4:
        return (
          <img style={{ height: "300px", width: "300px" }} src={great} alt="" />
        );
      case rating > 2 && rating < 3:
        return (
          <img style={{ height: "300px", width: "300px" }} src={ok2} alt="" />
        );
      case rating >= 2 && rating < 3:
        return (
          <img style={{ height: "300px", width: "300px" }} src={ok} alt="" />
        );

      default:
        return (
          <img style={{ height: "300px", width: "300px" }} src={bad} alt="" />
        );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {total < 0 ? <h1>{total}</h1> : <h1>+{total}</h1>}
      <div>{displayImg(rating)}</div>
      <Rating
        initialRating={rating}
        readonly={false}
        fractions={2}
        onChange={(value) => setRating(value)}
        onClick={(value) => setRating(value)}
        emptySymbol={<AiOutlineStar size={100} color={color} />}
        fullSymbol={<AiTwotoneStar size={100} color={color} />}
      />
    </div>
  );
}

export default App;
