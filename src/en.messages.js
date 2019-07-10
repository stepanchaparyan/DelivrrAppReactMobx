// Messages is a hash of ICU-compatible, FormatJS-friendly template string.
// This object can be multi-level, providing an easy way to namespace
// certain strings.

// See http://formatjs.io/ for more info.

module.exports = {
    projectTitle: 'DeliverApp',
    navbar: {
        shops: 'Shops',
        products: 'Products'
    },
    shopsPage:{
        title: 'Shops list',
        addNewShop: 'addNewShop',
    },



    user: {
        create: {
            label: {
                title: 'Invite User:',
                detail: 'User Detail:',
                email: 'Email:',
                roles: 'Roles:'
            },
            placeholder: {
                email: 'Enter an email address',
                firstName: 'First Name',
                lastName: 'Last Name'
            }
        },
        edit: {
            label: {
                name: 'Name:',
                roles: 'Roles:'
            },
            placeholder: {
                email: 'Enter an email address',
                lastName: 'Last Name'
            }
        }
    }


}