import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/ProductMenu.css';
import Filter from './Filter';
import CarouselProduct from './CarouselProduct';

function ProductMenu({ daybeds }) {
    const location = useLocation();
    const navigate = useNavigate();
    const initialProducts = location.state?.products || [];
    const category = location.state?.category || 'All Products'; 
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        applySorting();
    }, [sortOption, filteredProducts]);

    const handleFilterChange = (filters) => {
        const filtered = initialProducts.filter(product => {
            const matchesPrice = filters.price.length === 0 || filters.price.some(range => {
                if (range === '100-500') return product.price >= 100 && product.price <= 500;
                if (range === '500-1000') return product.price > 500 && product.price <= 1000;
                if (range === '1000-1500') return product.price > 1000 && product.price <= 1500;
                if (range === '1500-2000') return product.price > 1500 && product.price <= 2000;
                if (range === '2000-higher') return product.price > 2000;
                return false;
            });

            const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
            const matchesFabric = filters.fabric.length === 0 || filters.fabric.includes(product.fabric);
            const matchesFeatures = filters.features.length === 0 || filters.features.some(feature => product.features.includes(feature));
            const matchesShape = filters.shape.length === 0 || filters.shape.includes(product.shape);
            const matchesDesigner = filters.designer.length === 0 || filters.designer.includes(product.designer);

            return matchesPrice && matchesColor && matchesFabric && matchesFeatures && matchesShape && matchesDesigner;
        });
        setFilteredProducts(filtered);
    };

    const applySorting = () => {
        let sortedProducts = [...filteredProducts];
        switch (sortOption) {
            case 'price-asc':
                sortedProducts.sort((a, b) => {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);
                    return priceA - priceB;
                });
                break;
            case 'price-desc':
                sortedProducts.sort((a, b) => {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);
                    return priceB - priceA;
                });
                break;
            case 'new':
                sortedProducts.sort((a, b) => a.status.localeCompare(b.status));
                break;
            case 'top-rated':
                sortedProducts.sort((a, b) => {
                    const ratingA = parseInt(a.rating) || 0;
                    const ratingB = parseInt(b.rating) || 0;
                    return ratingB - ratingA;
                });
                break;
            case 'name-asc':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }
        setFilteredProducts(sortedProducts);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleProductClick = (id) => {
        navigate(`/product-details/${id}`, { state: { products: initialProducts } });
    };

    return (
        <div className="pm-product-menu-wrapper">
            <h1>{category}</h1>
            <div className="pm-sort-container">
                <label htmlFor="sort-select">Sort by: </label>
                <select id="sort-select" value={sortOption} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="new">New</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>
            <div className="pm-product-menu-container">
                <div className="pm-filter-container">
                    <Filter daybeds={initialProducts} onFilterChange={handleFilterChange} />
                </div>
                <div className="pm-product-grid">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="pm-product-item"
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.status}</h3>
                            <p>{product.name}</p>
                            <p>{`$${product.price}`}</p>
                        </div>
                    ))}
                </div>
            </div>
            <CarouselProduct daybeds={daybeds} />
        </div>
    );
}

export default ProductMenu;
