import { connect } from "react-redux";
import {inputText, inputSelect, fetchProducts, fetchCategories} from '../actions/Actions';
import Search from "../components/Search";

function mapStateToProps({productsReducer}){
    return {
        categories: productsReducer.categories,
        text: productsReducer.text,
        select: productsReducer.select,
    };
};

function mapDispatchToProps(dispatch){
    return{
        async fetchCategories(){
            const response = await fetch('http://localhost:13000/categories');
            const categories = await response.json();
            dispatch(fetchCategories(categories));
        },
        async fetchProducts(text, select){
            const response = await fetch('http://localhost:13000/items?name=' + text + '&category_id=' + select);
            const products = await response.json();
            dispatch(fetchProducts(products));
        },
        inputText(text){
            dispatch(inputText(text));
        },
        inputSelect(select){
            dispatch(inputSelect(select))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);