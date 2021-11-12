// import models
const Product = require('./Product'); 
const Category = require('./Category'); 
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  forerignKey: 'category_id',
  
});
// Categories have many Products
Category.hasMany(Product, {
  forerignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag) // PRODUCT
Product.belongsToMany(Tag,  {
  through: ProductTag,
});
// Tags belongToMany Products (through ProductTag) // TAG
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
