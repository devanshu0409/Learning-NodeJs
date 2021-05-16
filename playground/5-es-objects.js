//Object property shorthand

const name = 'Devanshu'
const userAge = 27

const user = {
    //name: name,
    name,
    age: userAge,
    location: 'Gwalior'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 75,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const price = product.price

//const {label, stock, rating} = product
//const {label:productLabel, stock, rating} = product
const {label:productLabel, stock, rating = 5} = product

//console.log(label)
console.log(productLabel)
console.log(stock)
console.log(rating)

// object destructuring in funtion

// const transaction = (type, myProduct) => {

// }

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('sale', product)