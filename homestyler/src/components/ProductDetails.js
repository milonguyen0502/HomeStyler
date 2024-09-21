import { useParams, useNavigate } from 'react-router-dom';
import '../css/ProductDetails.css';
import { useState } from 'react';
import Modal from 'react-modal';
import CarouselProduct from './CarouselProduct';
import Rating from './Rating';
import MostView from './MostView';

function ProductDetails({ daybeds, collections, handleAddToCart, chair, table, DesignerCollection, sessional, mirror, desk, fmirror }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = daybeds.find(p => p.id == parseInt(id)) || 
                    collections.find(c => c.id == parseInt(id)) ||  
                    chair.find(g => g.id == parseInt(id)) || 
                    table.find(t => t.id == parseInt(id)) || 
                    DesignerCollection.find(O => O.id == parseInt(id)) || 
                    sessional.find(s => s.id == parseInt(id)) ||
                    mirror.find(i => i.id == parseInt(id)) ||
                    desk.find(d => d.id == parseInt(id)) ||
                    fmirror.find(f => f.id == parseInt(id));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); 

    const thumbnails = product ? ['.' + product.image, ...product.thumbnails.map(thumbnail => '.' + thumbnail)] : [];
    const [mainImage, setMainImage] = useState(product ? '.' + product.image : '');

    if (!product) {
        return <div>Product not found</div>;
    }
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCartAndShowModal = () => {
        handleAddToCart({ ...product, quantity }); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToCart = () => {
        closeModal();
        navigate('/cart');
    };
    return (
        <div>
            <div className="product-details">
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
                    <img src={mainImage} alt={product.name} className="large-image" />
                </div>
                <div className="product-detail-info">
                    <h2>{product.name}</h2>
                    <h2>{product.status}</h2>
                    <p>SKU: {product.sku}</p>
                    <p>Fabric: {product.fabric}</p>
                    <p>Price: {product.price} USD</p>
                    <div className="quantity-controls">
                        <button onClick={decreaseQuantity} className="btn-quantity">-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity} className="btn-quantity">+</button>
                    </div>
                    <h4>In-Home Delivery</h4>
                    <p>Order now. Limited quantity available for ZIP code</p>
                    <ul>
                        <li>Placement in the room of your choice</li>
                        <li>Assembly & removal of packaging</li>
                        <li>Order multiple items, pay one flat rate delivery fee</li>
                    </ul>
                    <button onClick={handleAddToCartAndShowModal} className="btn-add-to-cart">
                        Add to Wishlist
                    </button>
                    <h4>DETAILS</h4>
                    <p>{product.details} USD</p>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Add to Cart"
                    >
                        <h2>Product Added to Cart</h2>
                        <img src={mainImage} alt={product.name} width="200px" height="200px" />
                        <p>{product.name}</p>
                        <p>Price: {product.price} USD</p>
                        <p>Quantity: {quantity}</p>
                        <button onClick={goToCart}>Go to Wishlist</button>
                        <button onClick={closeModal}>Close</button>
                    </Modal>
                </div>
            </div>
            <CarouselProduct daybeds={daybeds} />
            <Rating />
        </div>
    );
}

export default ProductDetails;
