import { useNavigate } from 'react-router-dom';
import '../css/CategoryProduct.css';

function SleeperAndDaybeds({ daybeds }) {
    const navigate = useNavigate();
    const displayedProducts = daybeds.slice(0, 8);

    const handleSeeMore = () => {
        navigate('/all-products', { state: { products: daybeds, category: 'Sleepers & Daybeds' } });
    };

    const handleProductClick = (id) => {
        navigate(`/product-details/${id}`);
    };

    return (
        <div>
            <h1>Sleepers & Daybeds</h1>
            <div className="product-grid row">
                {displayedProducts.map(product => (
                    <div key={product.id} className="cate-product-item col-lg-3 col-md-6"  onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.name} width="200px" height="200px" />
                        <h3>{product.status}</h3>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="see-more">
                <button onClick={handleSeeMore}>View More</button>
            </div>
        </div>
    );
}

export default SleeperAndDaybeds;
