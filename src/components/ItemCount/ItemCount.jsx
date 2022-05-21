import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

const ProductAdded = () => {
  return (
    <div className="buttons">
      <Link to="/menu">
        <button className="btn">Pedir Más</button>
      </Link>
      <Link to="/carrito">
        <button className="btn finish">Finalizar Pedido</button>
      </Link>
    </div>
  );
};

const ItemCount = ({ available, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [state, setState] = useState("notDone");

  const nextStep = () => {
    setState("done");
  };

  const sumProduct = () => {
    if (quantity <= 49) {
      // USO CANTIDAD LIMITADA POR 50 PORQUE HABLAMOS DE COMIDA Y NO TIENE STOCK PORQUE SE PREPARAN EN EL MOMENTO
      setQuantity(quantity + 1);
      if (quantity === 50) {
        console.log("No puede seleccionar más productos.");
      }
    }
  };

  const subtractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else if (quantity === 1) {
      console.log("Debe seleccionar al menos un producto.");
    }
  };

  return (
    <>
      {available ? (
        state === "notDone" ? (
          <div className="counter">
            <div>
              <button onClick={subtractProduct}>-</button>
              <h2 id="qty">{quantity}</h2>
              <button onClick={sumProduct}>+</button>
            </div>
            <button
              onClick={() => {
                onAdd(quantity);
                nextStep();
              }}
              className="btn"
            >
              Agregar al Carrito
            </button>
          </div>
        ) : (
          <ProductAdded />
        )
      ) : (
        <div className="counter disabled">
          <div className="disabled">
            <button onClick={subtractProduct} disabled>
              -
            </button>
            <h2 id="qty">{quantity}</h2>
            <button onClick={sumProduct} disabled>
              +
            </button>
          </div>
          <button className="btn disabled">Agregar al Carrito</button>
        </div>
      )}
    </>
  );
};

export default ItemCount;
