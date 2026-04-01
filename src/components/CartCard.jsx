function CartCard({ cart, removeFromCart }) {
  const { id, name, price, icon } = cart;
  console.log(cart);

  return (
    <>
      <div className="bg-[#F9FAFC] flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-5 rounded-xl gap-3 md:gap-0">
        <div className="flex items-center gap-3 md:gap-5">
          <span className="bg-white w-12 md:w-15 h-12 md:h-15 rounded-full flex items-center justify-center">
            <img className="w-6 md:w-8 h-6 md:h-8" src={icon} alt="Cart Icon" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
            <p className="text-sm md:text-base">${price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => removeFromCart(id)}
            className="text-[#FF3980] cursor-pointer font-bold text-sm md:text-base"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
export default CartCard;
