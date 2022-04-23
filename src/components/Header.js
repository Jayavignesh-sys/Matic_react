import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "./Header.css";
import Amazon from "../images/logo.png";
import USA from "../images/usa.png";
import RE from "../images/RE.jpg";
import Home from "../images/Home.jpg";
import BookStore from "../images/bookstore.png";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

const { Search } = Input;
const categories = [
    "Comics",
    "Dictionaries",
    "Novels",
    "Fantasy",
    "Horror",
    "Adventure",
];

const Header = () => {
    const { authenticate, account } = useMoralis();
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                extra={[
                    <>
                        <img src={Home} className="logo"></img>
                        <Search
                            placeholder="Find A Product"
                            enterButton
                            className="searchBar"
                        />
                        <Button
                            className="login"
                            key="1"
                            type="primary"
                            onClick={() => authenticate()}
                        >
                            {account ? (
                                <span>{account.slice(0, 5)}...</span>
                            ) : (
                                <span>login</span>
                            )}
                        </Button>
                    </>,
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
