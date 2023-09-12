import express, {urlencoded} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from './router/products-router'
import {addressesRouter} from "./router/addresses-router";

const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser({}))
app.use(urlencoded())

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

app.listen(PORT, () => {
  console.log('server start on http://localhost:%s', PORT)
})