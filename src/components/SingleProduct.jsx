import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
function SingleProduct() {
    const [products, setProducts] = useState(data);

    let { id } = useParams();
    let product = products.find((element) => element.id == id);
    console.log(product);
    return (
        <div key={product.id} className="product-single">
            <img
                src={product.image}
                alt="image"
                width={250}
                // height={300}
            />
            <h1>{product.productName}</h1>
            <h5>Price : {product.price} $</h5>
            <p>
                <strong>Description:</strong> {product.description}
            </p>
        </div>
    );
}

export default SingleProduct;
