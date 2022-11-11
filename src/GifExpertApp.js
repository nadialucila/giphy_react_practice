import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState("Arctic Monkeys");

    return (
        <Fragment>
            <h2>Buscador de Gifs</h2>
            <AddCategory setCategory={setCategories} />
            <hr />
            <ol>
                <GifGrid key={categories} category={categories} />
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;
