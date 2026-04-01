import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import UserReview from "./UserReview";
import Main from "./components/Main";
import dataList from "./components/data.json";
import { useState } from "react";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);
  const [purchasedId, setPurchasedId] = useState([]);

  const removeFromCart = (id) => {
    toast.error("Removed from cart");
    const updatedCards = carts.filter((card) => id != card.id);
    setCarts(updatedCards);
    setPurchasedId(updatedCards.map((c) => c.id));
  };

  function Checkout() {
    toast.info("Proceeding to checkout");
    setCarts([]);
    setPurchasedId([]);
  }

  const handleCard = (card) => {
    console.log("clicked");
    console.log(card);
    if (!purchasedId.includes(card.id)) {
      setCarts([...carts, card]);
      setPurchasedId([...purchasedId, card.id]);
      toast.success(`${card.name} added to cart`);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar purchasedId={purchasedId} setActiveTab={setActiveTab} />
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
      <GetStarted />
      <Pricing />
    </>
  );
}
export default App;
