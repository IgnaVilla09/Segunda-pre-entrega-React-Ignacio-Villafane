import "./CounterPresentacional.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className="containerCounter">
      <button className="btn-Counter" onClick={sumar}>+</button>
      <h4> {contador} </h4>
      <button className="btn-Counter" onClick={restar}>-</button>
      <button className="btn-AddCart" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default CounterPresentacional;
