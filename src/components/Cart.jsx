function Cart(props) {
    const { quantity = 0, handleBusketShow = Function.prototype } = props;
    return (
        <div 
            className="cart #ff5252 red accent-2 white-text"
            onClick={handleBusketShow}>
            <i className="material-icons">shopping_basket</i>
            {
                quantity ? 
                <span className="cart-quantity">{quantity}</span> :
                null
            }
        </div>
    )
}
export {Cart};
