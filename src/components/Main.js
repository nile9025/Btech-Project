import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>New User</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const number = this.productNumber.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          const user_address = this.productAddress.value
          this.props.createProduct(name, number, price, user_address)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="User Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productNumber"
              type="text"
              ref={(input) => { this.productNumber = input }}
              className="form-control"
              placeholder="Mobile Number"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Premium amount"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productAddress"
              type="text"
              ref={(input) => { this.productAddress = input }}
              className="form-control"
              placeholder="user Address"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <p>&nbsp;</p>
        <h2>Customer Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col"> Mobile Number</th>
              <th scope="col">Premium</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{product.number.toString()}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Pay
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
