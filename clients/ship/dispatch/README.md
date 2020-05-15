## Integrate with dispatch system

##### Installation
```
npm install ecs-sdk --save
```

##### API Reference

| Order Operations | Delhivery Operations  | 
|------------------|----------------------|
| shipment.create() | [delhivery.createOrder()](conn/delhivery/delhivery.spec.js#L53) | 
| shipment.show() | delhivery.track()  |
| shipment.cancel() | delhivery.cancel() |


##### Usage

#### 1. Create order in dispatch system
##### Pre-requesties
```
DISPATCH_URL = <YOUR DISPATCH DOMAIN URL> // Provide your dispatch domain url to your root project .env file
```

```
const ecsSDK = require('ecs-sdk');

const data = {
order_code: 'YOUR_ORDER_CODE',     mendatory
weight: WEIGHT_OF_THE_ORDER,     mendatory
airway_bill_number: 'AIRWAY_BILL_NUMBER'   optional
}

const shipment = await ecsSDk.DISPATCH.shipment.create(data); // This will return shipment object from Dispatch system after creating the shipment
```

#### 2. Get order details from dispatch system
##### Pre-requesties
```
DISPATCH_URL = <YOUR DISPATCH DOMAIN URL> // Provide your dispatch domain url to your root project .env file
```

```
const ecsSDK = require('ecs-sdk');

const orderId = 'ORDER_ID'

const shipment = await ecsSDk.DISPATCH.shipment.show(orderId); // This will return shipment object from Dispatch system
```

#### 3. Create order in Dehlivery portal 
##### Pre-requesties
```
DEHLIVERY_HOST = <Dehlivery Host> // Provide Dehlivery Host to your root project .env file
DEHLIVERY_TOKEN = <YOUR Dehlivery Account Token> // Provide your Dehlivery Account TOKEN to your root project .env file
```

```
const ecsSDK = require('ecs-sdk');

const data = {             
   # address from where shipments need to be picked up from

   pickup_location:             
      {
          add: "113 Barthal, Dundahera", # optional
          city: "New Delhi", # optional
          country: "India", # optional
          name: "FCDEL1",# mandatory, Use client warehouse name(pickup location) value provided with other set of credentials or else will throw error as                                                                     "ClientWarehouse matching query does not exist."
          phone: "xxxxxxxxxx", # optional
          pin: "110074" # optional
      },

   # shipment details

   shipments: [             
        {        
           client: "XYZ Online", # client name
           name: "John Kapoor", # mendatory consignee
           order: "3002199824", # mendatory client order number
           products_desc: "Sony PS3 Super Slim(Black)",# optional, product description
           order_date: "2017-05-20 12:00:00", # optional, ISO Format
           payment_mode: "Pre­paid", # mendatory It can be, Pre­paid, COD, Pickup, REPL or Cash
           total_amount: 21841.0, # in INR
           cod_amount: 0.0, # mendatory if payment_mode selected COD, amount to be collected, required for COD
           add: "M25, Nelson Marg, GBP City Phase 1", # mendatory
           "address_type": "home"/"office",  # optional
           city: "Gurgaon", # optional
           state: "Haryana", # optional
           country: "India", # It will be mandatory for Bangladesh and value should be "BD"
           phone: "xxxxxxxxxx", # mendatory
           pin": "122002", # mendatory

          # Shipment return address(optional)
           return_add: "",
           return_city: "",
           return_country: "",
           return_name: "",
           return_phone: "",
           return_pin: "",
           return_state: "",
           supplier: "Kangaroo (India) Pvt Ltd", # optional
        
          # seller weight and dimensions
          extra_parameters: "", # optional ­ Extra parameters that need to be send with packages. This should be unicoded dictionary
          shipment_width: "", # optional width of shipment
          shipment_height: "", # optional ­ height of shipment
          weight: 1, # required
          quantity: 1, # optional - quantity of goods, positive integer
        
         # seller keys(optional)
          seller_inv: "invoice number",# seller invoice no.
          seller_inv_date: "YYYY­MM­DDTHH:MM:SS+05:30", # ISO format
          seller_name: "seller name", # name of seller
          seller_add: "seller add", # seller address
          seller_cst: "seller cst", # seller cst no
          seller_tin: "seller tin", # seller tin no
        
         # extra(optional)
        
          consignee_tin: "consignee tin", # consignee tin no
          commodity_value: "commodity value", # commodity value
          tax_value: "tax value", # tax value
          sales_tax_form_ack_no:"" , # Sale Tax Form Acknowledge No.
          category_of_goods:"" # Category of goods
        
         # GST keys(Optional)
        
          seller_gst_tin: "seller_gst_tin", #GST TIN # of the seller
          client_gst_tin: "client_gst_tin", #GST TIN # of the contracting entity with Delhivery
          consignee_gst_tin: "consignee_gst_tin", #GST tin of the consignee in case of B2B shipments
          hsn_code: "hsn_code", #Share the Harmonized System of Nomenclature for each product in the package, you can pass more than one HSN here if the quantity is more than 1,using comma seperation.
          invoice_reference: "invoice_reference" #unique invoice reference number
        }
   ]
}          


const shipment = await ecsSDk.DISPATCH.delhivery.createOrder(data); // This will return shipment object from Dispatch system
```
