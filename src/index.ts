import express, {Request, Response} from 'express'
const port = 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
  let oleg = "oleg11!";
  res.send(oleg)
})

app.listen(port, () => {
  console.log('server start on http://localhost:%s', port)
})