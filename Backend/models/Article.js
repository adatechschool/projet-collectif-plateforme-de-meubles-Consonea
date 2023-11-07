const db = require("../sqlConnection");

class Article {
  constructor(
    name,
    type,
    colors,
    price,
    height,
    width,
    depth,
    description,
    status,
    quantity,
    user_id
  ) {
    this.name = name;
    this.type = type;
    this.colors = colors;
    this.price = price;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.description = description;
    this.status = status;
    this.quantity = quantity;
    this.user_id = user_id;
  }

  static async getAllArticles() {
    let sql = `SELECT * FROM articles;`;
    return await db.execute(sql);
  }
}

module.exports = Article;