import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CarouselProduct.css'; 

const MosView = ({ daybeds = [], collections = [], chairs = [], tables = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productListRef = useRef(null);
    const itemsToShow = 4; 
    const itemWidth = 295; 
    const navigate = useNavigate();

    const products = [...daybeds, ...collections, ...chairs, ...tables];

    const calculateTransformValue = () => {
        if (productListRef.current) {
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, (products.length - itemsToShow) * itemWidth);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - itemsToShow + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % (products.length - itemsToShow + 1));
    };

    const handleViewProduct = (productId) => {
        navigate(`/product/${productId}`); 
    };

    return (
        <div className="product-carousel">
            <div className="header">
                <h1>Most Viewed Products</h1>
                <div className="nav-container">
                    <button className="nav-btn prev" onClick={prevSlide}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <button className="nav-btn next" onClick={nextSlide}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="product-list-wrapper" ref={productListRef}>
                <div className="product-list" style={{ transform: `translateX(-${calculateTransformValue()}px)` }}>
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`product-item ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleViewProduct(product.id)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}$</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MosView;
