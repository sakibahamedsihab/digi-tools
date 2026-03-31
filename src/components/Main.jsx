import Card from "./Card";
import CartCard from "./CartCard";

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

  const total = carts.reduce((sum, item) => sum + item.price, 0);
  return (
    <section className="max-w-300 mx-auto py-10">
      <div className="flex flex-col justify-center gap-3 items-center text-center">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-lg text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box rounded-full">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full"
            aria-label="Products"
            onClick={() => setActiveTab("products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full"
            aria-label="Cart(2)"
            onClick={() => setActiveTab("cart")}
          />
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
            <p>Empty</p>
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
