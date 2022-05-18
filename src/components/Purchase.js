import { Select, Button, Modal, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link, useNavigate } from "react-router-dom";
import { books } from "../books";

const { Option } = Select;
function Purchase({ book }) {
    let navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [delivery, setDelivery] = useState("");
    const { Moralis, account, chainId } = useMoralis();

    const handleOk = async () => {
        // Get The Price of MATIC
        books["Comics"].pop();
        const options = {
            address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            chain: "eth",
        };
        const price = await Moralis.Web3API.token.getTokenPrice(options);
        const priceMatic = book.price / price.usdPrice;

        // Send Matic to book store owenr address

        const options1 = {
            type: "native",
            amount: Moralis.Units.ETH(0.01),
            receiver: "0x1BfEC59087a09a3236f0041408Fec58408434118",
        };
        let result = await Moralis.transfer(options1);

        //Save Transaction Details to DB
        const Transaction = Moralis.Object.extend("Transaction");
        const transaction = new Transaction();

        transaction.set("Customer", account);
        transaction.set("Delivery", delivery);
        transaction.set("Product", book.name);

        transaction.save();
        setIsModalVisible(false);
        navigate("/");
    };

    return (
        <>
            <span className="price"> ${book.price}</span>
            {chainId && (
                <Button
                    className="login"
                    style={{ width: "100%", marginTop: "50px" }}
                    onClick={() => setIsModalVisible(true)}
                >
                    <ShoppingCartOutlined /> Buy Now
                </Button>
            )}

            <Modal
                title="Purchase Product"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={() => setIsModalVisible(false)}
            >
                <div style={{ display: "flex" }}>
                    <img
                        src={book.image}
                        alt="Land"
                        style={{ width: "200px", height: "200px" }}
                    ></img>

                    <div>
                        <h3>{book.name}</h3>
                        <h2>{book.price}</h2>
                        <h4>Confirm Purchase</h4>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Purchase;
