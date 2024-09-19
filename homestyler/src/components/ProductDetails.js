import { useParams } from 'react-router-dom';
import '../css/ProductDetails.css';
import { useState } from 'react';

function ProductDetails({ daybeds, collections, handleAddToCart }) {
    const { id } = useParams();

    const product = daybeds.find(p => p.id == parseInt(id)) || collections.find(c => c.id == parseInt(id));

    const thumbnails = product ? ['.' + product.image, ...product.thumbnails.map(thumbnail => '.' + thumbnail)] : [];
    const [mainImage, setMainImage] = useState(product ? '.' + product.image : '');

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <div className="product-detail-container">
                <div className="image-gallery">
                    <div className="thumbnails">
                        {thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail"
                                onClick={() => setMainImage(thumbnail)}
                            />
                        ))}
                    </div>
                    <img src={mainImage} alt={product.name} width="400px" height="400px" />
                </div>
            </div>
            <h2>{product.status}</h2>
            <p>{product.description}</p>
            <p>{product.price} USD</p>

            {/* Nút Add to Cart */}
            <button onClick={() => handleAddToCart(product)} className="btn-add-to-cart">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetails;
