import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from '../actions'
import {connect} from 'react-redux';
export class Product extends Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    
    render() {
        const {_products} = this.props._products;
        if(_products.length>0){
           
           return (
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="container p-3">
                        <div className="row">
                            {
                                _products.map((item,index)=>(
                                    <div key={index} className="col-md-3" style={{marginBottom:'10px'}}>
                                        <img src={item.image} className="img-resposive" style={{width:'100%',height:'auto'}}/>
                                        <h5>{item.name}</h5>
                                        <button className="btn btn-primary" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add Cart</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
