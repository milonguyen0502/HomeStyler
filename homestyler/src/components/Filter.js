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
            {['color', 'price', 'fabric', 'features', 'shape', 'designer'].map(attribute => {
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
        </div>
    );
}

export default Filter;
