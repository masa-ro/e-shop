import React from 'react';

class Search extends React.Component{
    async componentDidMount(){
        await this.props.fetchCategories();
    };
    render(){
        const {
            categories,
            text,
            select,
            inputSelect,
            inputText,
            fetchProducts,
        } = this.props;
        const selects = categories.map(category => {
            return (
                <option value={category.id}>{category.name}</option>
            )}
        );
        return(
            <p>
                <select onChange={(e) => inputSelect(e.target.value)}>
                    <option value="">すべて</option>
                    {selects}
                </select>
                <input type="text" onChange={(e) => inputText(e.target.value)}/>
                <button onClick={() => fetchProducts(text, select)}>検索</button>
            </p>
        )
    };
};

export default Search;