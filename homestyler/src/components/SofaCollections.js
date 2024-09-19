import { Link, useNavigate } from 'react-router-dom';
import '../css/CategoryProduct.css';

function SofaCollections({ collections }) {
    const navigate = useNavigate();
    const displayedProducts = collections.slice(0, 8);

    const handleSeeMore = () => {
        navigate('/all-products', { state: { products: collections } });
    };
    const handleProductClick = (id) => {
        navigate(`/product-details/${id}`);
    };

    return (
        <div>
            <h1>Sofa & Sectional Collections</h1>
            <div className="product-grid">
                {displayedProducts.map(product => (
                    <div key={product.id} className="cate-product-item" onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.name} width="200px" height="200px" />
                        <h3>{product.status}</h3>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="see-more">
                <button onClick={handleSeeMore}>Xem thêm</button>
            </div>
        </div>
    );
}

export default SofaCollections;
