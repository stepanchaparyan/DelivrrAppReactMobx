import React, { Component } from 'react';
import { Button, FormGroup } from 'reactstrap';
import '../../stylesheets/addShops.scss';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import { DebounceInput } from 'react-debounce-input';
import { observer } from 'mobx-react';
import store from '../../store/store';
import uniqid from 'uniqid';

@observer
class AddShop extends Component {
  state = {
    id: '',
    name: '',
    city: '',
    address: ''
  }
  formRef = React.createRef();

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      id: uniqid
    })
    store.addShop(this.state);
    this.setState({
      id: '',
      name: '',
      city: '',
      address: ''
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
                    debounceTimeout={500}
                    name="name"
                    id="name"
                    type="text"
                    placeholder="name"
                    required
                    pattern=".{1,16}"
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
                    name="city"
                    id="city" 
                    type="text"                       
                    placeholder="city"
                    required
                    pattern=".{1,16}"
                    errorMessage={{
                        required: "City is required",
                        pattern: "City should be at maximum 16 characters long"
                    }}
                    value={this.state.city}
                    onChange={this.handleChange}
                    />
        </FormGroup>
        <FormGroup>
            <DebounceInput element={TextInput}
                    debounceTimeout={300}
                    name="address"
                    type="text" 
                    id="address"
                    placeholder="address"
                    pattern=".{0,16}"
                    errorMessage={{
                        pattern: "Address should be at maximum 16 characters long"
                    }}
                    value={this.state.address}
                    onChange={this.handleChange}
                    />
        </FormGroup>
        <FormGroup></FormGroup>
        <Button outline color="info">Add</Button>
    </ValidationForm>
    )
  }
}

export default AddShop
