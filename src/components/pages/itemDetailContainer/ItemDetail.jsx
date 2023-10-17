import CounterContainer from "../../common/counter/CounterContainer"
import "./ItemDetail.css"

export const ItemDetail = ( {productSelected, onAdd} ) => {
  return (
    <div className="containerDetail">
            <h2>{productSelected.title}</h2>
            <img className="img-Detail" src={productSelected.img} alt="" />
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  )
}
