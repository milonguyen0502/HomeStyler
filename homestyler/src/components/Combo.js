import { useNavigate } from 'react-router-dom';
import '../css/Combo.css';

function Combo({ DesignerCollection }) {
    const navigate = useNavigate();


    const handleProductClick = (id) => {
        navigate(`/designer-collection-detail/${id}`); 
    };

    return (
        <div>
            <h1 style={{ color: "black", marginTop: "25px" }}>OUR COLLECTIONS</h1>
            <div className="product-grid">
                {DesignerCollection.map(product => (
                    <div key={product.id} className="cate-product-item-combo" onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.name} width="300px" height="300px" />
                        <h4>{product.name}</h4>
                        <p>{product.designer}</p>
                        <p>{product.price}$</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Combo;
