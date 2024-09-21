import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SelectCategory.css';
import CoffeeTable from './CoffeeTable';

const SelectCategory = ({daybeds, collections, chair, sessional, table, mirror, desk, fmirror}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const categoryListRef = useRef(null);
    const itemWidth = 295;
    const navigate = useNavigate();

    const calculateTransformValue = () => {
        if (categoryListRef.current) {
            const visibleItems = Math.floor(categoryListRef.current.offsetWidth / itemWidth);
            const maxTranslateX = (8 - visibleItems) * itemWidth; 
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, maxTranslateX);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 7 ? 0 : prevIndex + 1)); 
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 7 : prevIndex - 1)); 
    };

    const handleViewCategory = (id) => {
        if (id === 2) { 
            navigate('/all-products', { state: { products: daybeds, category: 'Sleepers & Daybeds'  } });
        } if (id === 1) {
            navigate(`/all-products`, { state: { products: collections, category: 'Sofa & Sectional Collections' } });
        } if (id === 3) {
            navigate(`/all-products`, { state: { products: chair, category: 'Office Chairs' } });
        }if (id === 4) {
            navigate(`/all-products`, { state: { products: table, category: 'Coffee Table' } });
        }
        if (id === 5) {
            navigate(`/all-products`, { state: { products: sessional, category: 'Sessional' } });
        }
        if (id === 6) {
            navigate(`/all-products`, { state: { products: mirror, category: 'Mirrors' } });
        }
        if (id === 7) {
            navigate(`/all-products`, { state: { products: desk, category: 'Desks' } });
        }
        if (id === 8) {
            navigate(`/all-products`, { state: { products: fmirror, category: 'Floor Mirrors' } });
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
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Chairs_Filter/$categoryBorder$/240919085309/071124_ViewAll_LivingRoom_Chairs_Filter.jpg" alt="Tables" />
                        <h3>Office Chair</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 3 ? 'active' : ''}`} onClick={() => handleViewCategory(4)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_CoffeeTables_Filter/$categoryBorder$/240919085308/071124_ViewAll_LivingRoom_CoffeeTables_Filter.jpg" alt="Benches" />
                        <h3>Coffee Tables</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 4 ? 'active' : ''}`} onClick={() => handleViewCategory(5)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Sectionals_Filter/$categoryBorder$/240920085131/071124_ViewAll_LivingRoom_Sectionals_Filter.jpg" alt="Cabinets" />
                        <h3>Sessional</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 5 ? 'active' : ''}`} onClick={() => handleViewCategory(6)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/062724_Mirrors_Mirrors_Accessories_Filter/$categoryBorder$/240920085211/062724_Mirrors_Mirrors_Accessories_Filter.jpg" alt="Shelves" />
                        <h3>Mirrors</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 6 ? 'active' : ''}`} onClick={() => handleViewCategory(7)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_desks/$categoryBorder$/240920053225/ViewAll_Filter_Furniture_desks.jpg" alt="Ottomans" />
                        <h3>Desks</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 7 ? 'active' : ''}`} onClick={() => handleViewCategory(8)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_benches/$categoryBorder$/240917085339/ViewAll_Filter_Furniture_benches.jpg" alt="Coffee Tables" />
                        <h3>Floor Mirrors</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 0 ? 'active' : ''}`} onClick={() => handleViewCategory(1)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Sofas_Filter/$categoryBorder$/240917085349/071124_ViewAll_LivingRoom_Sofas_Filter.jpg" alt="Sofas" />
                        <h3>Sofa & Sectional Collections</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 1 ? 'active' : ''}`} onClick={() => handleViewCategory(2)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_Sleepres/$categoryBorder$/240917085349/ViewAll_Filter_Furniture_Sleepres.jpg" />
                        <h3>Sleepers & Daybeds</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 2 ? 'active' : ''}`} onClick={() => handleViewCategory(3)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Chairs_Filter/$categoryBorder$/240919085309/071124_ViewAll_LivingRoom_Chairs_Filter.jpg" alt="Tables" />
                        <h3>Office Chair</h3>
                    </div>
                    <div className={`category-item ${currentIndex === 3 ? 'active' : ''}`} onClick={() => handleViewCategory(4)}>
                        <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_CoffeeTables_Filter/$categoryBorder$/240919085308/071124_ViewAll_LivingRoom_CoffeeTables_Filter.jpg" alt="Benches" />
                        <h3>Coffee Tables</h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SelectCategory;
