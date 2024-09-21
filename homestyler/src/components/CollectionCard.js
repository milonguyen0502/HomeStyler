import { useNavigate } from 'react-router-dom';
import '../css/CategoryProduct.css';

function SleeperAndDaybeds({ RoyalLivingRoom }) {
    const navigate = useNavigate();
    const displayedProducts = RoyalLivingRoom.slice(0, 8);

    const handleSeeMore = () => {
        navigate('/all-products', { state: { products: RoyalLivingRoom, category: 'Sleepers & Daybeds' } });
    };

    const handleProductClick = (id) => {
        navigate(`/product-details/${id}`);
    };

    return (
        <div>
            <h1>SINGLE ITEMS</h1>
            <div className="product-grid">
                {displayedProducts.map(product => (
                    <div key={product.id} className="cate-product-item"  onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.name} width="200px" height="200px" />
                        <h3>{product.status}</h3>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SleeperAndDaybeds;
