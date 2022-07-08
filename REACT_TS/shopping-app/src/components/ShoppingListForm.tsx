import React, {useRef} from "react";


interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}


function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {

    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const newProductQuantity: number = parseInt(quantityInputRef.current!.value);
        onAddItem(newProduct, newProductQuantity);
        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "1";
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={productInputRef}/>
            <input type="number" placeholder="Quantity" min={0} ref={quantityInputRef}/>
            <button type="submit">Add Item</button>
        </form>
    )
}



export default ShoppingListForm;