import { createContext, useState } from "react";
import { imagesData } from "./assets/facilities";

export const ShopContext = createContext(null);

const getDefault = () => {
  const storedDescriptions = localStorage.getItem("Itemdescript");

  if (storedDescriptions) {
    return JSON.parse(storedDescriptions);
  }
  let cart = {};
  for (let i = 1; i < imagesData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [Itemdescript, setitemdescript] = useState(getDefault());

  const showMoreDetail = (itemId) => {
    // Reset all descriptions to 0 and increment the one for the clicked item
    const updatedDescriptions = { ...Itemdescript };
    for (let i = 1; i < imagesData.length + 1; i++) {
      updatedDescriptions[i] = 0;
    }
    updatedDescriptions[itemId] += 1;

    // Save to state and localStorage
    setitemdescript(updatedDescriptions);
    localStorage.setItem("Itemdescript", JSON.stringify(updatedDescriptions));
  };

  const contextValue = {
    Itemdescript,
    showMoreDetail,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
