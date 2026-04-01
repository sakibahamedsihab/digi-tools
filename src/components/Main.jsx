import Card from "./Card";
import CartCard from "./CartCard";
import emptyCart from "../assets/empty.png";

function Main({
  dataList,
  activeTab,
  setActiveTab,
  handleCard,
  purchasedId,
  carts,
  removeFromCart,
  Checkout,
}) {
  // console.log(activeTab);
  // console.log(dataList);
  const getTabClass = (tab) => {
    return `btn rounded-full border-none ${activeTab === tab ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]" : ""}`;
  };

  const total = carts.reduce((sum, item) => sum + item.price, 0);
  return (
    <section className="max-w-300 mx-auto py-10">
      <div className="flex flex-col justify-center gap-3 items-center text-center">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-lg text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="border border-base-300 rounded-full p-1 my-5">
          <span className="space-x-3">
            <button
              onClick={() => setActiveTab("products")}
              className={getTabClass("products")}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={getTabClass("cart")}
            >
              {purchasedId.length > 0 ? `Cart(${purchasedId.length})` : `Cart`}
            </button>
          </span>
        </div>
      </div>

      {activeTab === "products" && (
        <div className="grid grid-cols-3 gap-8 py-5">
          {dataList.map((data) => (
            <Card
              key={data.id}
              data={data}
              handleCard={handleCard}
              purchasedId={purchasedId}
            />
          ))}
        </div>
      )}
      {activeTab === "cart" && (
        <div className=" flex flex-col gap-5 p-8 border border-base-300 rounded-lg mt-5">
          {carts.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center">
              <img className="w-75" src={emptyCart} alt="Empy Cart" />
              <p className="text-2xl font-bold text-gray-800">
                Nothing here yet!
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Go to{" "}
                <span
                  onClick={() => setActiveTab("products")}
                  className="text-purple-500 text-2xl font-semibold cursor-pointer"
                >
                  Products
                </span>{" "}
                and find your perfect tool.
              </p>
            </div>
          ) : (
            <>
              <p className="text-2xl font-bold">Your Cart</p>
              {carts.map((cart) => (
                <CartCard
                  key={cart.id}
                  cart={cart}
                  removeFromCart={removeFromCart}
                  carts={carts}
                />
              ))}
              <div className="flex justify-between">
                <p className="text-sm">Total:</p>
                <p className="text-2xl font-bold">${total}</p>
              </div>
              <button
                onClick={Checkout}
                className="btn btn-primary rounded-full"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
export default Main;
