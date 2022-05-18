import React from "react";
import { Link } from "react-router-dom";
import "./BS.css";
import { useMoralis } from "react-moralis";

export default function BS({ authenticate, account }) {
    const handleClick = async () => {
        await authenticate();
        console.log(account);
    };

    return (
        <div className="BSCont">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
            </head>
            <div className="container marketing">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBCwm7jMs_nAtkEEvB6cvo6H7cqjf0YaWkA&usqp=CAU"
                            alt="Avatar"
                            class="avatar"
                        ></img>
                        <h2>
                            <b style={{ color: "white" }}>Buyer</b>
                        </h2>
                        <p>
                            Looking to <b>buy</b> a property? You're at the
                            right place now. Click on the button below to
                            register yourself into our network and find
                            properties or houses of your interest!{" "}
                        </p>
                        <p>
                            <Link
                                to="/categories"
                                state={"Comics"}
                                class="btn btn-secondary"
                            >
                                <b>Proceed</b>&raquo;
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5e448f6229f2871651bb1b1b/1582772160683-OH3FC1V94EDQ0UDHI5YA/image-asset.png"
                            alt="Avatar"
                            class="avatar"
                        ></img>
                        <h2>
                            <b style={{ color: "white" }}>Seller</b>
                        </h2>
                        <p>
                            Looking to <b>sell/rent out</b> a property? You're
                            at the right place now. Click on the button below to
                            register yourself into our network and find
                            properties or houses of your interest!
                        </p>
                        <p>
                            <Link
                                to="/seller"
                                class="btn btn-secondary"
                                href="/open/SellerPage"
                                onClick={() => {
                                    handleClick();
                                }}
                            >
                                <b>Proceed</b>&raquo;
                            </Link>
                        </p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    );
}
