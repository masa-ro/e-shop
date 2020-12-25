import {fetchProducts} from '../actions/Actions';
import {connect} from 'react-redux';
import Products from '../components/Products';

function mapStateToProps({productsReducer}){
    return{
        product: productsReducer.product,
        products: productsReducer.products,
        text: productsReducer.text,
        select: productsReducer.select,
    };
};

function mapDispatchToProps(dispatch){
    return{
        async fetchProducts(text, select){
            const response = await fetch('http://localhost:13000/items?name=' + text + '&category_id=' + select);
            const products = await response.json();
            dispatch(fetchProducts(products));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);