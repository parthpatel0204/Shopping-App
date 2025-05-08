function CountDot({ totalQuantity }) {
  if (totalQuantity === 0) return null;

  return (
    <>
      {totalQuantity > 0 && (
        <span className="absolute right-[80px] top-[25px] rounded-full bg-black px-[8px] py-[10px] text-[12px] leading-[0] text-white">
          {totalQuantity}
        </span>
      )}

      <span className="absolute right-[20px] top-[25px] rounded-full bg-black px-[8px] py-[10px] text-[12px] leading-[0] text-white">
        1
      </span>
    </>
  );
}

export default CountDot;
