import React, { Component } from 'react'
import { Button, FormGroup } from 'reactstrap';
import '../../stylesheets/addProduct.scss';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import { DebounceInput } from 'react-debounce-input';
import { observer } from 'mobx-react';
import store from '../../store/productsStore';
import uniqid from 'uniqid';
import messages from '../../en.messages';

@observer
class AddProduct extends Component {
  state = {
    id: '',
    name: '',
    price: '',
    quantity: ''
  }
  formRef = React.createRef();

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      id: uniqid
    })
    store.addProduct(this.state);
    this.setState({
        id: '',
        name: '',
        price: '',
        quantity: ''
    });
    this.resetForm();
  }

  resetForm = () => {
    let formRef = this.formRef.current;
    formRef.resetValidationState(this.state.clearInputOnReset);
  }
  render() {
    return (
    <ValidationForm className="form" onSubmit={this.handleSubmit}  ref={this.formRef}>
        <FormGroup>
            <DebounceInput element={TextInput}
                    debounceTimeout={300}
                    name="name"
                    id="name"
                    type="text"
                    placeholder={messages.name}
                    required
                    pattern=".{1,24}"
                    errorMessage={{
                        required: "Name is required",
                        pattern: "Name should be at maximum 16 characters long"
                    }}
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoFocus
                />
        </FormGroup>
        <FormGroup>
            <DebounceInput element={TextInput}  
                    debounceTimeout={300}
                    name="price"
                    id="price" 
                    type="number"                       
                    placeholder={messages.price}
                    required
                    pattern=".{1,16}"
                    errorMessage={{
                        required: "Price is required",
                        pattern: "Price should be at maximum 16 characters long"
                    }}
                    value={this.state.price}
                    onChange={this.handleChange}
                    />
        </FormGroup>       
        <FormGroup>
            <DebounceInput element={TextInput}  
                    debounceTimeout={500}
                    name="quantity"
                    id="quantity" 
                    type="number"                       
                    placeholder={messages.quantity}
                    required
                    pattern=".{1,16}"
                    errorMessage={{
                        required: "Quantity is required",
                        pattern: "Quantity should be at maximum 16 characters long"
                    }}
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    />
        </FormGroup>    
        <Button outline color="info">{messages.add}</Button>
    </ValidationForm>
    )
  }
}

export default AddProduct