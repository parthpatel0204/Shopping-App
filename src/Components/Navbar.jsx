import react from "/src/assets/react.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import CountDot from "./CountDot";

function Navbar({ state }) {
  const totalQuantity = Object.values(state)
    .filter((item) => item.addedToCart) // only count added products
    .reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center justify-between gap-8 bg-transparent px-8 py-4 shadow-md">
      <div className="w-12 shrink-0">
        <img src={react} alt="" />
      </div>
      <input
        type="text"
        placeholder="Search here..."
        className="min-w-0 flex-1 rounded-full border-2 px-4 py-3 outline-stone-300"
      />
      <div className="flex w-20 shrink-0 justify-between gap-8 text-2xl">
        <HiOutlineShoppingBag />
        <CountDot totalQuantity={totalQuantity} />
        <IoHeartOutline />
      </div>
    </div>
  );
}

export default Navbar;
