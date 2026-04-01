function UserReview() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-8 md:py-10 px-4 md:px-100 text-white flex flex-col md:flex-row justify-between gap-6 md:gap-0 text-center md:text-left">
      <span className="flex flex-col items-center gap-3">
        <p className="text-4xl md:text-6xl font-bold">50K+</p>
        <p className="text-sm md:text-lg">Active Users</p>
      </span>
      <span className="flex flex-col items-center gap-3">
        <p className="text-4xl md:text-6xl font-bold">200+</p>
        <p className="text-sm md:text-lg">Premium Tools</p>
      </span>
      <span className="flex flex-col items-center gap-3">
        <p className="text-4xl md:text-6xl font-bold">4.9</p>
        <p className="text-sm md:text-lg">Rating</p>
      </span>
    </div>
  );
}

export default UserReview;
