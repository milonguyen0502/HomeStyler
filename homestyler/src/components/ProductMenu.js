import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css/ProductMenu.css';
import Filter from './Filter';

function ProductMenu() {
    const location = useLocation();
    const navigate = useNavigate(); // Thêm dòng này
    const initialProducts = location.state?.products || [];
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [sortOption, setSortOption] = useState('default');

    const handleFilterChange = (filters) => {
        const filtered = initialProducts.filter(product => {
            return Object.keys(filters).every(key => {
                return filters[key].length === 0 || filters[key].includes(product[key]);
            });
        });
        applySorting(filtered);
    };

    const applySorting = (products) => {
        let sortedProducts = [...products];
        switch (sortOption) {
            case 'price-asc':
                sortedProducts.sort((a, b) => parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')));
                break;
            case 'price-desc':
                sortedProducts.sort((a, b) => parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', '')));
                break;
            case 'new':
                sortedProducts.sort((a, b) => a.status.localeCompare(b.status));
                break;
            case 'top-rated':
                sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            default:
                break;
        }
        setFilteredProducts(sortedProducts);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        applySorting(filteredProducts);
    };

    const handleProductClick = (id) => {
        navigate(`/product-details/${id}`, { state: { products: initialProducts } }); // Điều hướng đến ProductDetails
    };

    return (
        <div className="product-menu-wrapper">
            <h1>All Products</h1>
            <div className="sort-container">
                <label htmlFor="sort-select">Sort by: </label>
                <select id="sort-select" value={sortOption} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="new">New</option>
                    <option value="top-rated">Top Rated</option>
                </select>
            </div>
            <div className="product-menu-container">
                <div className="filter-container">
                    <Filter daybeds={initialProducts} onFilterChange={handleFilterChange} />
                </div>
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="product-item"
                            onClick={() => handleProductClick(product.id)} // Thêm sự kiện click
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.status}</h3>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductMenu;
