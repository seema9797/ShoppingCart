import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
export class Header extends Component {
    render() {
        return (
            <div className="bg-black shadow text-white p-3 mb-4">
              <div className="">
                  <nav className="container">
                        <ul className="nav">
                            <li className="nav-item" ><Link to="/" className="nav-link active text-lg font-bold uppercase">Products</Link></li>
                            <li className="nav-item mr-4"><Link to="/carts" className="nav-link"><button class="btn btn-danger">Carts : {this.props.numberCart}</button></Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)
