import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import UserReview from "./UserReview";
import Main from "./components/Main";
import dataList from "./components/data.json";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);
  const [purchasedId, setPurchasedId] = useState([]);

  const removeFromCart = (id) => {
    alert("removed from the cart");
    const updatedCards = carts.filter((card) => id != card.id);
    setCarts(updatedCards);
    setPurchasedId(updatedCards.map((c) => c.id));
  };

  function Checkout() {
    alert("Proceeding to checkout");
    setCarts([]);
    setPurchasedId([]);
  }

  const handleCard = (card) => {
    alert(`${card.name} added to cart`);
    console.log("clicked");
    console.log(card);
    if (!purchasedId.includes(card.id)) {
      setCarts([...carts, card]);
      setPurchasedId([...purchasedId, card.id]);
    }
  };

  return (
    <>
      <Navbar />
      <Banner />
      <UserReview />
      <Main
        dataList={dataList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleCard={handleCard}
        purchasedId={purchasedId}
        carts={carts}
        removeFromCart={removeFromCart}
        Checkout={Checkout}
      />
    </>
  );
}
export default App;
