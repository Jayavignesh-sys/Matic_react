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
import { Grid, GridItem } from "@chakra-ui/react";
import LOGO1 from "../images/LOGO1.png";

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
                        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                            <GridItem w="100%" h="10">
                                <img
                                    src={LOGO1}
                                    style={{ width: "350px", height: "55px" }}
                                    className="logo"
                                ></img>
                            </GridItem>
                            <GridItem w="100%" h="10">
                                <Search
                                    placeholder="Find A Product"
                                    enterButton
                                    className="searchBar"
                                />
                            </GridItem>
                            <GridItem w="100%" h="10">
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
                            </GridItem>
                        </Grid>
                    </>,
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
