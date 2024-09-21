import { useState, useEffect } from 'react';
import '../css/Filter.css';

function Filter({ daybeds, onFilterChange }) {
    const [filters, setFilters] = useState({
        color: [],
        price: [],
        fabric: [],
        features: [],
        shape: [],
        designer: [],
    });

    useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    const handleCheckboxChange = (attribute, value) => {
        setFilters(prevFilters => {
            const updatedFilters = { ...prevFilters };
            if (updatedFilters[attribute].includes(value)) {
                updatedFilters[attribute] = updatedFilters[attribute].filter(item => item !== value);
            } else {
                updatedFilters[attribute] = [...updatedFilters[attribute], value];
            }
            return updatedFilters;
        });
    };

    const resetFilters = () => {
        setFilters({
            color: [],
            price: [],
            fabric: [],
            features: [],
            shape: [],
            designer: [],
        });
    };

    const priceRanges = [
        { label: '100-500', min: 100, max: 500 },
        { label: '500-1000', min: 500, max: 1000 },
        { label: '1000-1500', min: 1000, max: 1500 },
        { label: '1500-2000', min: 1500, max: 2000 },
        { label: '2000-higher', min: 2000, max: Infinity }
    ];

    const uniqueValuesWithCount = (attribute) => {
        const valueCount = {};
        if (!Array.isArray(daybeds) || daybeds.length === 0) return valueCount;

        daybeds.forEach(product => {
            const values = Array.isArray(product[attribute]) ? product[attribute] : [product[attribute]];
            values.forEach(value => {
                if (value !== undefined && value !== '') {
                    valueCount[value] = (valueCount[value] || 0) + 1;
                }
            });
        });
        return valueCount;
    };

    return (
        <div className="filter">
            <div className="filter-group">
                <h3>Price</h3>
                {priceRanges.map(range => (
                    <div key={range.label} className="filter-option">
                        <input
                            type="checkbox"
                            id={`price-${range.label}`}
                            name="price"
                            value={range.label}
                            checked={filters.price.includes(range.label)}
                            onChange={() => handleCheckboxChange('price', range.label)}
                        />
                        <label htmlFor={`price-${range.label}`}>
                            {range.label}
                        </label>
                    </div>
                ))}
            </div>
            {['color', 'fabric', 'features', 'shape', 'designer'].map(attribute => {
                const counts = uniqueValuesWithCount(attribute);
                return (
                    <div key={attribute} className="filter-group">
                        <h3>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</h3>
                        {Object.entries(counts).length > 0 ? (
                            Object.entries(counts).map(([value, count]) => (
                                <div key={value} className="filter-option">
                                    <input
                                        type="checkbox"
                                        id={`${attribute}-${value}`}
                                        name={attribute}
                                        value={value}
                                        checked={filters[attribute].includes(value)}
                                        onChange={() => handleCheckboxChange(attribute, value)}
                                    />
                                    <label htmlFor={`${attribute}-${value}`}>
                                        {value} ({count})
                                    </label>
                                </div>
                            ))
                        ) : (
                            <p>No options available</p>
                        )}
                    </div>
                );
            })}
            <button onClick={resetFilters} className="clear-button">
                Clear All
            </button>
        </div>
    );
}

export default Filter;
