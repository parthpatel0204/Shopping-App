function PlusCount({ disabled, onClick, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"} rounded-full border px-2.5 py-1 leading-none hover:bg-[#f4f4f4]`}
    >
      {children}
    </button>
  );
}

export default PlusCount;
