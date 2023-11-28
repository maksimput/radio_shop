const sequelize = require('../db')
const {DataTypes} = require('sequelize')
                                                                            //описание tables&columns
const Users = sequelize.define('users', {
    id: {type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name : {type:DataTypes.STRING},
    surname : {type:DataTypes.STRING},
    email : {type:DataTypes.STRING, unique: true},
    password : {type:DataTypes.STRING},
    role : {type:DataTypes.STRING,defaultValue: 'USER'},
})

const Basket = sequelize.define('basket', {
    id: {type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const Basket_product = sequelize.define('basket_product', {
    id: {type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const Product = sequelize.define('product', {
    id: {type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name: {type:DataTypes.STRING,unique:true},
    price: {type:DataTypes.FLOAT, allowNull:false},
    img: {type:DataTypes.STRING,allowNull:false},
})

const Product_info = sequelize.define('product_info', {
    id: {type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull: false},
})
                                                    //cвязи между таблицами (строки с PK создаются автоматическими)
Users.hasOne(Basket)
Basket.belongsTo(Users)

Basket.hasMany(Basket_product)
Basket_product.belongsTo(Basket)

Product.hasMany(Basket_product)
Basket_product.belongsTo(Product)

Type.hasMany(Product)
Product.belongsTo(Type)

Product.hasMany(Product_info)
Product_info.belongsTo(Product)

module.exports =  {   // экспорт
    Users,
    Basket,
    Basket_product,
    Product,
    Product_info,
    Type


}



