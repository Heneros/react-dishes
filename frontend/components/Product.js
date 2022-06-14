import formatMoney from "../lib/formatMoney"

export default function Product({ product }) {
    return (<div>
        <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
        <a href={`/product/${product.id}`}> {product.name} </a>
        <span>  {formatMoney(product.price)} </span>
    </div>)

}