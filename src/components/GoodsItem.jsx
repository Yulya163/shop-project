function GoodsItem(props) {
    const { id, name, description, price, full_background, addToCart = Function.prototype } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button 
                    className="btn #ff5252 red accent-2" 
                    href="#"
                    onClick={() => addToCart({id, name, price})}
                >Купить
                </button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price} руб.</span>
            </div>
        </div>
    )
}
export { GoodsItem };
