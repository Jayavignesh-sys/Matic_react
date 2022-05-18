import React from "react";
import { Button, Layout } from "antd";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import Rating from "../components/Rating";
import PriceRanges from "../components/PriceRanges";
import Results from "../components/Results";

const { Sider, Content } = Layout;

const Categories = () => {
    const { state: category } = useLocation();
    const [rating, setRating] = useState(1);
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(100);

    return (
        <>
            <div className="container">
                <Header />

                <Layout>
                    <Content
                        theme="light"
                        style={{ padding: "35px", backgroundColor: "white" }}
                    >
                        <Results
                            category={category}
                            rating={rating}
                            priceMin={priceMin}
                            priceMax={priceMax}
                        />
                    </Content>
                </Layout>
            </div>
        </>
    );
};

export default Categories;
