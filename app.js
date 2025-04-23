@@ -19,6 +19,11 @@ app.get('/products/:id', api.getProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)

app.get('/orders', api.listOrders)
app.post('/orders/', api.createOrder)
app.put('/orders/:id', api.editOrder)
app.delete('/orders/:id', api.deleteOrder)
// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
