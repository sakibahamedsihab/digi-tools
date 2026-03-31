function UserReview() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 px-100 text-white flex justify-between">
      <span className="flex flex-col items-center gap-3">
        <p className="text-6xl font-bold">50K+</p>
        <p className="text-lg">Active Users</p>
      </span>
      <span className="flex flex-col items-center gap-3">
        <p className="text-6xl font-bold">200+</p>
        <p className="text-lg">Premium Tools</p>
      </span>
      <span className="flex flex-col items-center gap-3">
        <p className="text-6xl font-bold">4.9</p>
        <p className="text-lg">Rating</p>
      </span>
    </div>
  );
}

export default UserReview;
