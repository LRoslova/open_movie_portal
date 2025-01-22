import { useState } from "react";
import { useCount } from "../hooks/useCount";
import { Button } from "antd";

export const FilmDetails = ({title, genre, seasonsCount}) => {
    let {count, decrement, increment} = useCount(0);
    return (
        <div>
            <h2>{title || "unknown film"}</h2>
            <p>{genre}</p>
            <p>{seasonsCount}</p>

            <div>
            <Button type="primary" shape="circle" onClick={decrement}>
        A
      </Button>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>

        </div>
    )
}


