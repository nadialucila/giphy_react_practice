import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category, key }) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>

            { loading && <p>'Cargando...'</p> }

            <div className="card-grid">

                {data.map((img) => {
                    return <GifGridItem {...img} key={img.id} />;
                })}

            </div>
        </>
    );
};
