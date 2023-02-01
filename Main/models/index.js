// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { 
    model: ProductTag,
    unique: false,
   },
  // not sure about this syntax
  as: 'requested_products',
  // foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { 
    model: ProductTag,
    unique: false,
   },
  // not sure about this syntax
  as: 'product_tag',
  // foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
