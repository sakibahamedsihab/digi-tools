function CartCard({ cart, removeFromCart }) {
  const { id, name, price, icon } = cart;
  console.log(cart);

  return (
    <div className="bg-[#F9FAFC] flex justify-between items-center p-5 rounded-xl">
      <div className="flex items-center gap-5">
        <span className="bg-white w-15 h-15 rounded-full flex items-center justify-center">
          <img className="w-8 h-8" src={icon} alt="Cart Icon" />
        </span>
        <div>
          <h1>{name}</h1>
          <p>{price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => removeFromCart(id)}
          className="text-[#FF3980] cursor-pointer font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default CartCard;
