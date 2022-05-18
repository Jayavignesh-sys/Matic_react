import React from "react";
import "./seller.css";
import { useState } from "react";
import { books } from "../books.js";
import Spidey1 from "../images/spiderman1.png";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    Code,
    Grid,
    Center,
    Input,
    theme,
    Container,
} from "@chakra-ui/react";

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

import { Textarea } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Seller({ account }) {
    console.log(account);
    const [Size, setSize] = useState("");
    const [Price, setPrice] = useState("");
    const [Address, setAddress] = useState("");
    const [Image, setImage] = useState("");

    const handleChangesize = (e) => {
        setSize(e.target.value);
    };

    const handleChangeimage = (e) => {
        setImage(e.target.value);
    };

    const handleChangeaddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangeprice = (e) => {
        setPrice(e.target.value);
        console.log(Price);
    };

    const handleSubmit = async (e) => {
        console.log(account);
        console.log(Size);
        console.log(books["Comics"]);
        var obj = {
            Wallet_address: account,
            address: Address,
            price: Price,
            size: Size,
            image: Image,
            purchased: false,
        };
        books["Comics"].push(obj);
    };

    return (
        // <div className="Form-cont">
        //     <div className="inner-cont">
        //         <p>Enter your wallet address :- </p>
        //         <Input
        //             type="text"
        //             placeholder="Price"
        //             onChange={handleChangesize}
        //             style={{ width: "100%" }}
        //         />
        //         <Input
        //             type="text"
        //             placeholder="Size"
        //             onChange={handleChangeprice}
        //             style={{ width: "100%" }}
        //         />
        //         <button
        //             onClick={() => {
        //                 handleSubmit();
        //             }}
        //         >
        //             Submit
        //         </button>
        //     </div>
        // </div>
        <Container padding="4">
            <Box w="100%" pt={4} pb={4}>
                Property Size:
            </Box>
            <NumberInput bg="white">
                <NumberInputField onChange={handleChangesize} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Box w="100%" pt={4} pb={4}>
                Price:
            </Box>
            <NumberInput bg="white">
                <NumberInputField onChange={handleChangeprice} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Box w="100%" pt={4} pb={4}>
                Address:
            </Box>
            <Textarea
                placeholder="Enter your Address here..."
                onChange={handleChangeaddress}
            />
            <Box w="100%" pt={4} b={4} color="white"></Box>
            <Input
                variant="filled"
                placeholder="image link"
                onChange={handleChangeimage}
            />
            <Center w="100%" pt={4} pb={4} color="white">
                <Button
                    colorScheme="blue"
                    isFullWidth="true"
                    onClick={handleSubmit}
                >
                    <Link to="/">Submit</Link>
                </Button>
            </Center>
        </Container>
    );
}
