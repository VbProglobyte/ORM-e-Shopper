// import models
const Product = require('./Product'); 
const Category = require('./Category'); 
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Catagory, {
  forerignKey: 'catagory_id',
  // Define the third table needed to store the foreign keys
  // through: {
  //   model: Tag,
  //   unique: false
  // },
  // // Define an alias for when data is retrieved
  // as: 'catagory_id'
});
// Categories have many Products
Catagory.hasMany(Product, {
  forerignKey: 'catagory_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag) // PRODUCT
Product.belongsToMany(Tag,  {
  through: ProductTag,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});
// ////////////////////////////////////////////////
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
