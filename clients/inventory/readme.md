# Inventory

|Stock Item | Order       | Sale        | Return | Purchase Order | Inward |
|----------|-------------|-------------|--------|----------------|--------|
| [stockItem.create()](api/stockItem/stockItem.spec.js#L11) | createOrder | [sale.create()](api/sale/sale.spec.js#L11) |[creditNote.create()](api/creditNote/creditNote.spec.js#L11)        |                |        |
|  updateStockItem       | UpdateOrder | updateSale  |        |                |        |
|        |               |             |             |        |                |        |
