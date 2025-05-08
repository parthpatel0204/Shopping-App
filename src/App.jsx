import { useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import react from "/src/assets/react.svg";

import ProductCard from "./Components/ProductCard";

const products = [
  {
    id: 1,
    name: "React T-shirt",
    price: "$20",
    image: react,
  },
  {
    id: 2,
    name: "Vue Hoodie",
    price: "$35",
    image: react,
  },
  {
    id: 3,
    name: "Angular Cap",
    price: "$15",
    image: react,
  },
  {
    id: 4,
    name: "Svelte Sticker",
    price: "$5",
    image: react,
  },
  {
    id: 5,
    name: "Node.js Mug",
    price: "$12",
    image: react,
  },
  {
    id: 6,
    name: "Next.js Tote Bag",
    price: "$25",
    image: react,
  },
  {
    id: 7,
    name: "Tailwind Socks",
    price: "$8",
    image: react,
  },
  {
    id: 8,
    name: "JavaScript Notebook",
    price: "$18",
    image: react,
  },
  {
    id: 9,
    name: "React T-shirt",
    price: "$20",
    image: react,
  },
  {
    id: 10,
    name: "Vue Hoodie",
    price: "$35",
    image: react,
  },
  {
    id: 11,
    name: "Angular Cap",
    price: "$15",
    image: react,
  },
  {
    id: 12,
    name: "Svelte Sticker",
    price: "$5",
    image: react,
  },
  {
    id: 13,
    name: "Node.js Mug",
    price: "$12",
    image: react,
  },
  {
    id: 14,
    name: "Next.js Tote Bag",
    price: "$25",
    image: react,
  },
  {
    id: 15,
    name: "Tailwind Socks",
    price: "$8",
    image: react,
  },
];

const initialState = products.reduce((acc, product) => {
  acc[product.id] = { quantity: 1, addToCart: false };
  return acc;
}, {});

function reducer(state, action) {
  const { id } = action;

  switch (action.type) {
    case "+quantity":
      return {
        ...state,
        [id]: { ...state[id], quantity: state[id].quantity + 1 },
      };

    case "-quantity":
      return {
        ...state,
        [id]: {
          ...state[id],
          quantity: Math.max(state[id].quantity - 1, 1),
        },
      };

    case "addToCart":
      return {
        ...state,
        [id]: {
          ...state[id],
          addedToCart: true,
        },
      };

    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  return (
    <>
      <Navbar state={state} />
      <ProductCard products={products} state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
