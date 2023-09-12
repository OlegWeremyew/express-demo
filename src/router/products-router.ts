import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
  //@ts-ignore
  const foundProduct = productsRepository.findProducts(req.query.title?.toString())
  res.send(foundProduct)
})
productsRouter.post('/', (req: Request, res: Response) => {
  const newProduct = productsRepository.createProduct(req.body.title)
  res.status(201)
  res.json(newProduct)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
  const id = +req.params.id
  const product = productsRepository.findProductById(id)

  if (!product) {
    res.send(404)
  }

  res.status(200)
  res.send(product)
})
productsRouter.patch('/:id', (req: Request, res: Response) => {
  const id = +req.params.id
  const title = req.body.title
  const isUpdated = productsRepository.updateProduct(id, title)

  if (isUpdated) {
    const product = productsRepository.findProductById(id)
    res.send(product)
    return
  }

  res.send(404)
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
  const id = +req.params.id
  const isDeleted = productsRepository.deleteProduct(id)

  if (isDeleted) {
    res.send(204)
  } else {
    res.send(404)
  }
})