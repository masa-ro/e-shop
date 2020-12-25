import React from 'react';

class Products extends React.Component{
    async componentDidMount(){
        await this.props.fetchProducts(this.props.text, this.props.select);
    };

    render(){
        const{
            product, products, 
        } = this.props;
        const lists = products.map(product => {
            return(
                <tr key={product.id}>
                    <td>{product.category.name}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )}
        );
        return(
            <div>
                <table>
                    <tr>
                        <th>カテゴリ</th>
                        <th>商品名</th>
                        <th>価格</th>
                    </tr>
                    {lists}
                </table>
            </div>
        )
    }
}

export default Products;