import api from 'src/api'
import { Product } from 'src/models/Product'

const ProductService = () => {
  const getProducts = () => {
    return api.get('/products/product').then((res) => {
      return res
    })
  }

  const getProduct = (productId: string) => {
    return api.get(`/products/product/${productId}`).then((res) => {
      return res
    })
  }

  const addProduct = (product: Product) => {
    return api.post(`/products/product`, product).then((res) => {
      return res
    })
  }

  const updateProduct = (product: Product, productId: string) => {
    return api.put(`/products/product/${productId}`, product).then((res) => {
      return res
    })
  }

  const removeProduct = (productId: string) => {
    return api.delete(`/products/product/${productId}`).then((res) => {
      return res
    })
  }

  return {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    removeProduct
  }
}

export default ProductService
