import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CarouselProduct.css'; 

const CarouselProduct = ({ daybeds = [], collections = [], chair = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productListRef = useRef(null);
    const itemWidth = 295;
    const navigate = useNavigate();

    const products = [...daybeds, ...collections, ...chair];

    const calculateTransformValue = () => {
        if (productListRef.current) {
            const visibleItems = Math.floor(productListRef.current.offsetWidth / itemWidth);
            const maxTranslateX = (products.length - visibleItems) * itemWidth;
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, maxTranslateX);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const handleViewProduct = (productId) => {
        navigate(`/product-details/${productId}`); 
    };

    return (
        <div className='row'>
        <div className="product-carousel">
            <div className="col-lg-12 col-md-6 col-sm-6 header">
                <h1>People Also Viewed</h1>
                <div className="nav-container">
                    <button className="nav-btn prev" onClick={prevSlide}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <button className="nav-btn next" onClick={nextSlide}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="col-lg-12 col-md-6 product-list-wrapper" ref={productListRef}>
                <div className="product-list" style={{ transform: `translateX(-${calculateTransformValue()}px)` }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="col-md-12 product-item"
                            onClick={() => handleViewProduct(product.id)}
                        >
                            <img src={'.' + product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}$</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default CarouselProduct;
