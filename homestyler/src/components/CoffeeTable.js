import { useNavigate } from 'react-router-dom';
import '../css/CategoryProduct.css';

function CoffeeTable({ table }) {
    const navigate = useNavigate();
    const displayedProducts = table.slice(0, 8);

    const handleSeeMore = () => {
        navigate('/all-products', { state: { products: table, category: 'Coffee Table' } });
    };

    const handleProductClick = (id) => {
        navigate(`/product-details/${id}`);
    };

    return (
        <div>
            <h1>Coffee Table</h1>
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
            <div className="see-more">
                <button onClick={handleSeeMore}>View More</button>
            </div>
        </div>
    );
}

export default CoffeeTable;
