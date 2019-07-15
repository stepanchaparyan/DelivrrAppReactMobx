import { observable, action } from 'mobx';

class Products {
  @observable products = [
    { id: 1, name: 'Pan', price: '100', quantity: '100' },
    { id: 2, name: 'Map', price: '1500', quantity: '20' },
    { id: 3, name: 'Marker', price: '350', quantity: '30' }
  ];

  @action addProduct(product) { 
    console.log('added', product);
    this.products.push(product);
  }

  @action deleteProduct(number) { 
    console.log('deleted', number) 
    this.products.splice(number, 1);
  }

  @action updateProduct(data, updatedVersion, id) { 
    const product = this.products.filter(product => product.id === id);
    product[0][data] = updatedVersion;
  }

}
const product = new Products();
export default product;