import React from "react";
import Item from "../models/item";

interface ShoppingListProps {
    items: Item[];
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {props.items.map(item => (
                    <li key={item.id}>{item.quantity} {item.product};</li>
                ))}
            </ul>
        </div>333
    );
}