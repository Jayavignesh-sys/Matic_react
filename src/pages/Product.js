import React from "react";
import { Rate } from "antd";
import "./Product.css";
import Header from "../components/Header";
import { useLocation } from "react-router";
import Purchase from "../components/Purchase";

const Product = () => {
    let { state: book } = useLocation();
    return (
        <>
            <div className="container">
                <Header />

                <div className="product-content">
                    <div className="product-details">
                        <hr></hr>
                        <p>
                            Price:
                            <span className="price"> {book.price}</span>
                        </p>
                        <p>
                            <img src={book.image} alt="Land" />
                        </p>
                    </div>
                    <div className="purchase-details">
                        <Purchase book={book} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
