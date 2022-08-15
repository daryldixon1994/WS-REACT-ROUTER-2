import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
function Products() {
    const [products, setProducts] = useState(data);
    return (
        <div className="products-list">
            {products.map((product) => {
                return (
                    <div key={product.id} className="product-item">
                        <img
                            src={product.image}
                            alt="image"
                            width={250}
                            // height={300}
                        />
                        <h1>{product.productName}</h1>
                        <h5>Price : {product.price} $</h5>
                        <button type="button" id="btn">
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                                to={`/singleProduct/${product.id}`}
                            >
                                See more
                            </Link>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
