import formatMoney from "../lib/formatMoney"

export default function Product({ product }) {
    return (<div className="product-item">
        <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
        <a href={`/product/${product.id}`}> {product.name} </a>
        <p> {product.description} </p>
        <span>  {formatMoney(product.price)} </span>
    </div>)

}