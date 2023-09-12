let products = [
  {id: 1, title: 'tomato'},
  {id: 2, title: 'orange'},
]

export const productsRepository = {
  findProducts(title: string | null | undefined) {
    if (title) {
      return products.filter((product) => product.title.includes(title))
    }

    return products
  },

  createProduct(title: string) {
    const newProduct = {
      id: Number(new Date),
      title,
    }

    products.push(newProduct)
    return newProduct
  },

  findProductById(id: number) {
    return products.find((item) => item.id === +id)
  },

  updateProduct(id: number, title: string) {
    let product = products.find((item) => item.id === id)

    if (product) {
      product.title = title
      return true
    }

    return false
  },

  deleteProduct(id: number){
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1)
        return true
      }
    }

    return false
  }
}