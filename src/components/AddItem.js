import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ productName: '', productPrice: 0 }); 
  };

  render() {
    return (
      <form className="row mb-5" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="productName"
            value={this.state.productName}
            onChange={(e) => this.setState({ productName: e.target.value })}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            value={this.state.productPrice}
            onChange={(e) => this.setState({ productPrice: Number(e.target.value) })}
          />
        </div>
        <button type="submit" className="btn btn-primary col-2">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
