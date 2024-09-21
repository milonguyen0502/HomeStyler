import { useParams, useNavigate } from 'react-router-dom';
import '../css/DesignerCollectionDetail.css';
import { useState } from 'react';
import Modal from 'react-modal';
import CarouselProduct from './CarouselProduct'; 
import Rating from './Rating'; 
import CollectionCard from './CollectionCard';

function DesignerCollectionDetail({ DesignerCollection, handleAddToCart, RoyalLivingRoom }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const collection = DesignerCollection.find(h => h.id == parseInt(id));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const thumbnails = collection ? [collection.image, ...collection.thumbnails.map(thumbnail =>  thumbnail)] : [];
    const [mainImage, setMainImage] = useState(collection ?  collection.image : '');

    if (!collection) {
        return <div>Collection not found</div>;
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
        handleAddToCart({ ...collection, quantity });
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
            <div className="collection-detail">
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
                    <img src={mainImage} alt={collection.name} className="large-image" />
                </div>
                <div className="product-detail-info">
                    <h2>{collection.name}</h2>
                    <p>Price: {collection.price} USD</p>
                    <div className="quantity-controls">
                        <button onClick={decreaseQuantity} className="btn-quantity">-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity} className="btn-quantity">+</button>
                    </div>
                    <button onClick={handleAddToCartAndShowModal} className="btn-add-to-cart">
                        Add to Wishlist
                    </button>
                    <h4>In-Home Delivery</h4>
                    <p>Order now. Limited quantity available for ZIP code.</p>
                    <ul>
                        <li>Placement in the room of your choice</li>
                        <li>Assembly & removal of packaging</li>
                        <li>Order multiple items, pay one flat rate delivery fee</li>
                    </ul>
                    <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Add to Cart">
                        <h2>Collection Added to Cart</h2>
                        <img src={mainImage} alt={collection.name} width="200px" height="200px" />
                        <p>{collection.name}</p>
                        <p>Price: {collection.price} USD</p>
                        <p>Quantity: {quantity}</p>
                        <button onClick={goToCart}>Go to Wishlist</button>
                        <button onClick={closeModal}>Close</button>
                    </Modal>
                </div>
            </div>
            <CollectionCard RoyalLivingRoom={RoyalLivingRoom}/>
            <Rating />
        </div>
    );
}

export default DesignerCollectionDetail;
