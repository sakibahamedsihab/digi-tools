const tagStyles = {
  "Best Seller": "bg-orange-100 text-orange-500",
  Popular: "bg-purple-100 text-purple-500",
  New: "bg-green-100 text-green-500",
};

const periodLabel = {
  monthly: "/Mo",
  "one-time": "/One-Time",
  yearly: "/Yr",
};

function Card({ data, handleCard, purchasedId }) {
  const { id, name, description, price, period, tag, features, icon } = data;

  const isPurchased = purchasedId.includes(id);

  function btnStyle() {
    return isPurchased
      ? "w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-green-400 to-green-600 hover:opacity-90 transition mt-2 btns cursor-pointer"
      : "w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-purple-500 to-purple-700 hover:opacity-90 transition mt-2 btns cursor-pointer";
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
      {/* Tag */}
      <span
        className={`absolute top-4 right-4 text-sm font-semibold px-3 py-1 rounded-full ${tagStyles[tag]}`}
      >
        {tag}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>

      {/* Name & Description */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm">{periodLabel[period]}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-600 text-sm"
          >
            <span className="text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button onClick={() => handleCard(data)} className={btnStyle()}>
        {isPurchased ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
}
export default Card;
