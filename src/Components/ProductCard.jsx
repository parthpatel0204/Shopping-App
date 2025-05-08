import AddBuyBtn from "./AddBuyBtn";
import PlusCount from "./PlusCount";
import MinusCount from "./MinusCount";
import Cart from "./Cart";

function ProductCard({ dispatch, state, products }) {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
      {products.map((product, index) => (
        <div
          key={index}
          className="w-full p-4 transition-all duration-500 ease-in-out hover:shadow-md"
        >
          <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-gray-100">
            <img
              className="w-[50%] object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">{product.price}</p>
          </div>
          <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-[10px]">
            <div className="flex items-center gap-3 md:gap-[4px]">
              <MinusCount
                disabled={state[product.id]?.addedToCart}
                onClick={() => dispatch({ type: "-quantity", id: product.id })}
                className="rounded-full border px-2.5 py-1 leading-none hover:bg-[#f4f4f4]"
              >
                -
              </MinusCount>
              <p>{state[product.id].quantity}</p>
              <PlusCount
                disabled={state[product.id]?.addedToCart}
                onClick={() => dispatch({ type: "+quantity", id: product.id })}
              >
                +
              </PlusCount>
            </div>
            <AddBuyBtn
              onClick={() => {
                if (state[product.id].addedToCart) {
                  // window.write = "/cart";
                } else {
                  dispatch({ type: "addToCart", id: product.id });
                }
              }}
            >
              {state[product.id].addedToCart ? "BUY NOW" : "ADD TO CART"}
            </AddBuyBtn>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
