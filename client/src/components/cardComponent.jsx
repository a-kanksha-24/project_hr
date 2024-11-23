import React, { useContext } from "react";
import { imagesData } from "../assets/facilities"; 
import { Link } from "react-router-dom";
import { ShopContext } from "../shop-context";

const CardComponent = () => {
  const { showMoreDetail } = useContext(ShopContext);

  return (
    <div className="card-container">
      {imagesData.map((image) => (
        <div className="main-card" key={image.id}>
          <img src={image.url} alt={image.title} className="card-image" />
          <div className="overlay-card">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
            <button
              className="overlay-show-more-button"
              onClick={() => showMoreDetail(image.id)}
            >
              <Link to={"/" + image.title}>Show More</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
