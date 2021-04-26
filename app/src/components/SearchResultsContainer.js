import ProductList from './ProductList';
import SearchResultsSummary from './SearchResultsSummary';
import '../styles/SearchResultsContainer.css';

const SearchResultsContainer = ({ products }) => {
    return (
        <div className='search-results-container'>
            <SearchResultsSummary></SearchResultsSummary>
            <ProductList products={products}></ProductList>
        </div>
    );
};

export default SearchResultsContainer;
