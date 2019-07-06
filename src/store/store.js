import { observable, action, when, autorun } from 'mobx';

class Shop {
  @observable shops = [
    { id: 1, name: 'Nairi', city: 'Vanadzor', address: 'Aghayan 45' },
    { id: 2, name: 'Arevik', city: 'Vanadzor', address: 'Tigran Mets 8' },
    { id: 3, name: 'Aregak', city: 'Vanadzor', address: 'Tig 8' }
  ];

  @action addShop(shop) { 
    console.log('added', shop);
    this.shops.push(shop);
  }

  @action deleteShop(number) { 
    console.log('deleted', number) 
    this.shops.splice(number, 1);
  }

  @action updateShop(data, updatedVersion, id) { 
    const shop = this.shops.filter(shop => shop.id === id);
    shop[0][data] = updatedVersion;
  }

}
const shop = new Shop();
export default shop;

// when (
//   () => nickName.age > 40,
//   () => { console.log('ggggggggggggggg') },
// ); 

// // autorun (
// //   () => { alert('autorun') },
// //   {
// //     name: 'Custom autorun',
// //     delay: 3000,
// //   }
// // )

