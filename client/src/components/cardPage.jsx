import React, { useContext } from "react";
import { imagesData } from "../assets/facilities";
import { ShopContext } from "../shop-context";
import { CardPageDetail } from "./cardPageDetail";

const CardPage = () => {
  const { Itemdescript } = useContext(ShopContext);
  return (
    <div className="Detail">
      <div>
        <h1>Card details</h1>
      </div>
      <div className="DetailItem">
        {imagesData.map((product) => {
          if (Itemdescript[product.id] != 0) {
            console.log(Itemdescript[product.id]);
            return <CardPageDetail data={product} key={product.id} />;
          }
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default CardPage;
