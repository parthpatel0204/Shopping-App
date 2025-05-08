function MinusCount({ disabled, onClick, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1 leading-none hover:bg-[#f4f4f4] ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"}`}
    >
      {children}
    </button>
  );
}

export default MinusCount;
