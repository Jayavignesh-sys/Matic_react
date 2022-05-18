import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
import "./Results.css";
import { books } from "../books.js";
import { Carousel } from "antd";
import Carousel1 from "../images/1.jpeg";
import Carousel2 from "../images/2.jpeg";
import Carousel3 from "../images/3.jpeg";
import { Image, Box } from "@chakra-ui/react";
import { useEffect } from "react";

function Results({ category, rating, priceMin, priceMax }) {
    const carousel = [Carousel1, Carousel2, Carousel3];
    const bookCategory = books[category];
    console.log(bookCategory);
    useEffect(() => {
        console.log("Book info changed");
    }, [books]);
    return (
        <>
            <Carousel autoplay className="carousel">
                {carousel.map((e) => {
                    return (
                        <Box boxSize="sm">
                            <Image
                                src={e}
                                className="carousel-img"
                                alt="carousel"
                                objectFit="cover"
                            ></Image>
                        </Box>
                    );
                })}
            </Carousel>
            {bookCategory.map((e, i) => {
                console.log(e.purchased);
                return (
                    <>
                        <Card>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <p className="title">{e.wallet_address}</p>
                                    <h2> {e.price}</h2>
                                    <p>{e.size}</p>
                                    <p>{e.address}</p>
                                    <img
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                        }}
                                        src={e.image}
                                        alt="Land"
                                    />
                                    <Link
                                        to="/product"
                                        state={e}
                                        className="login"
                                    >
                                        Got to Product Page
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </>
                );
            })}
        </>
    );
}

export default Results;
