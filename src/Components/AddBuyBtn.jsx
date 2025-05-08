function AddBuyBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 md:w-auto md:p-[5px] md:text-[13px] lg:text-[12px]"
    >
      {children}
    </button>
  );
}

export default AddBuyBtn;
