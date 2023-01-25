 
const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button classname="btn btn-dark"><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
            <p>{cantidadCarrito}</p>
        </>
    );
}

export default CartWidget;
