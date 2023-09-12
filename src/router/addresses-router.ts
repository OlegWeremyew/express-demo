import {Request, Response, Router} from "express";

export const addressesRouter = Router({})

let addresses = [
  {id: 1, value: 'Nezalejnosti 12'},
  {id: 2, title: 'selitscags 10'},
]

addressesRouter.get('/', (req: Request, res: Response) => {
  res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id
  const address = addresses.find((item: any) => item.id === +id)

  if (!address) {
    res.send(404)
  }

  res.status(200)
  res.send(address)
})
