import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import "./App.css";
import BS from "./pages/BS";
import Seller from "./pages/Seller";
import { useMoralis } from "react-moralis";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
    const { authenticate, account } = useMoralis();

    return (
        <ChakraProvider>
            <Routes>
                <Route path="seller" element={<Seller account={account} />} />
                <Route path="product" element={<Product />} />
                <Route path="categories" element={<Categories />} />
                <Route
                    path="/"
                    element={
                        <BS authenticate={authenticate} account={account} />
                    }
                />
            </Routes>
        </ChakraProvider>
    );
}
