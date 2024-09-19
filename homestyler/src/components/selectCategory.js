import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SelectCategory.css';

const SelectCategory = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const categoryListRef = useRef(null);
    const itemWidth = 295;
    const navigate = useNavigate();

    const calculateTransformValue = () => {
        if (categoryListRef.current) {
            const visibleItems = Math.floor(categoryListRef.current.offsetWidth / itemWidth);
            const maxTranslateX = (8 - visibleItems) * itemWidth; // Assuming 8 items
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, maxTranslateX);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 7 ? 0 : prevIndex + 1)); // 7 is the last index
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 7 : prevIndex - 1)); // 7 is the last index
    };

    const handleViewCategory = (id) => {
        if (id === 2) { // ID 2 corresponds to "Sleepers & Daybeds"
            navigate('/all-products');
        } else {
            navigate(`/category/${id}`);
        }
    };

    return (
        <div className="category-carousel">
            <div className="header">
                <h1>Living Room Furniture</h1>
                <div className="nav-container">
                    <button className="nav-btn prev" onClick={prevSlide}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <button className="nav-btn next" onClick={nextSlide}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="category-list-wrapper" ref={categoryListRef}>
                <div className="category-list" style={{ transform: `translateX(-${calculateTransformValue()}px)` }}>
                    <div className={`category-item ${currentIndex === 0 ? 'active' : ''}`} onClick={() => handleViewCategory(1)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Sofas_Filter/$categoryBorder$/240917085349/071124_ViewAll_LivingRoom_Sofas_Filter.jpg" alt="Sofas" />
                        <h3>Sofa & Sectional Collections</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 1 ? 'active' : ''}`} onClick={() => handleViewCategory(2)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_Sleepres/$categoryBorder$/240917085349/ViewAll_Filter_Furniture_Sleepres.jpg" />
                        <h3>Sleepers & Daybeds</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 2 ? 'active' : ''}`} onClick={() => handleViewCategory(3)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Tables" />
                        <h3>Tables</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 3 ? 'active' : ''}`} onClick={() => handleViewCategory(4)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Benches" />
                        <h3>Benches</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 4 ? 'active' : ''}`} onClick={() => handleViewCategory(5)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Cabinets" />
                        <h3>Cabinets</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 5 ? 'active' : ''}`} onClick={() => handleViewCategory(6)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Shelves" />
                        <h3>Shelves</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 6 ? 'active' : ''}`} onClick={() => handleViewCategory(7)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Ottomans" />
                        <h3>Ottomans</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 7 ? 'active' : ''}`} onClick={() => handleViewCategory(8)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Coffee Tables" />
                        <h3>Coffee Tables</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectCategory;
