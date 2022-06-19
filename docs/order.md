# Welcome to Order Section

### Order System

- order Request

To place order, client should connect to the order EndPoint and send parameters request as follows.

>"URL": "wss://hani_trade/rithmic_middleware/order:443

**Request:**
 ```json
{
    "systemName": "Rithmic Test",
    "infraType": "2",
    "username": "username",
    "password": "password",
    "exchange": "CME",
    "symbol": "NQM2",
    "side": "B",
    "price": 11000
}
```

And if order success, clients should get json reponse as follows
 
**Noted : Make sure you get response code "000" is mean the orders successfully** 

**Response order received from client:**
 ```json
{
    "statusCode": "1000",
    "notifyType": "ORDER_RCVD_FROM_CLNT",
    "statusOrder": "Order received from client",
    "orderID": "10111575",
    "instrumentType": "",
    "exchange": "CME",
    "symbol": "NQM2",
    "price": 12000.0,
    "currency": "",
    "priceType": 1,
    "transactiontype": 1,
    "quantity": 1,
    "duration": 1,
    "userId": "your username",
    "accountId": "account ID",
    "tradeExchange": "CME",
    "tradeRoute": "globex",
    "sequence_number": "",
    "manualOrAuto": 1,
    "origPriceType": 1
}
```

**Response order open pending:**
 ```json
{
    "statusCode": "1000",
    "notifyType": "OPEN_PENDING",
    "statusOrder": "open pending",
    "orderID": "10111575",
    "instrumentType": "Future",
    "exchange": "CME",
    "symbol": "NQM2",
    "price": 12000.0,
    "currency": "USD",
    "priceType": 1,
    "transactiontype": 1,
    "quantity": 0,
    "duration": 1,
    "userId": "muunship@gmail.com",
    "accountId": "HK7567",
    "tradeExchange": "CME",
    "tradeRoute": "globex",
    "sequence_number": "ERJIG",
    "manualOrAuto": 1,
    "origPriceType": 1
}
```

**Response orders received by exchange gateway:**
 ```json
{
    "statusCode": "1000",
    "notifyType": "ORDER_RCVD_BY_EXCH_GTWY",
    "statusOrder": "order received by exch gateway",
    "orderID": "10111575",
    "instrumentType": "Future",
    "exchange": "CME",
    "symbol": "NQM2",
    "price": 12000.0,
    "currency": "USD",
    "priceType": 1,
    "transactiontype": 1,
    "quantity": 0,
    "duration": 1,
    "userId": "muunship@gmail.com",
    "accountId": "HK7567",
    "tradeExchange": "CME",
    "tradeRoute": "globex",
    "sequence_number": "ERJIG",
    "manualOrAuto": 1,
    "origPriceType": 1
}
```

**Response orders sent to exchange:**
 ```json
{
    "statusCode": "1000",
    "notifyType": "ORDER_SENT_TO_EXCH",
    "statusOrder": "order sent to exch",
    "orderID": "10111575",
    "instrumentType": "Future",
    "exchange": "CME",
    "symbol": "NQM2",
    "price": 12000.0,
    "currency": "USD",
    "priceType": 1,
    "transactiontype": 1,
    "quantity": 0,
    "duration": 1,
    "userId": "muunship@gmail.com",
    "accountId": "HK7567",
    "tradeExchange": "CME",
    "tradeRoute": "globex",
    "sequence_number": "ERJIG",
    "manualOrAuto": 1,
    "origPriceType": 1
}
```

**Response orders sent to exchange:**
 ```json
{
    "statusCode": "1000",
    "notifyType": "ORDER_SENT_TO_EXCH",
    "statusOrder": "order sent to exch",
    "orderID": "10111575",
    "instrumentType": "Future",
    "exchange": "CME",
    "symbol": "NQM2",
    "price": 12000.0,
    "currency": "USD",
    "priceType": 1,
    "transactiontype": 1,
    "quantity": 0,
    "duration": 1,
    "userId": "muunship@gmail.com",
    "accountId": "HK7567",
    "tradeExchange": "CME",
    "tradeRoute": "globex",
    "sequence_number": "ERJIG",
    "manualOrAuto": 1,
    "origPriceType": 1
}
```

**Response status order:**
 ```json
{
    "statusCode": "1000",
    "notifyType": "STATUS",
    "isSnapshot": false,
    "reportType": "status",
    "status": "",
    "basketID": "10111575",
    "originalBasketID": "",
    "fcmID": "Rithmic-FCM",
    "ibID": "Prospects",
    "accountID": "HK7567",
    "userID": "muunship@gmail.com",
    "symbol": "NQM2",
    "exchange": "CME",
    "tradeRoute": "globex",
    "exchangeOrderID": "681038696312",
    "instrumentType": "Future",
    "quantity": 0,
    "price": 12000.0,
    "triggerPrice": 0.0,
    "transaction_type": "BUY (1)",
    "duration": "DAY (1)",
    "priceType": "LIMIT (1)",
    "origPriceType": "LIMIT (1)",
    "manualOrAuto": "LIMIT (1)",
    "confirmedSize": 1,
    "confirmedDate": "20220615",
    "confirmedID": "68935:1339808",
    "modifiedSize": 0,
    "modifiedTime": "",
    "modifiedDate": "",
    "modifyID": "",
    "cancelledSize": 0,
    "cancelledTime": "",
    "cancelledDate": "",
    "cancelledID": "",
    "fillPrice": 0.0,
    "fillSize": 0,
    "fillTime": "",
    "fillDate": "",
    "fillID": "",
    "triggerID": "",
    "sequenceNumber": "ERJIG",
    "origSequenceNumber": "ERJIG",
    "corSequenceNumber": "ERJIG",
    "currency": "USD",
    "countryCode": "",
    "text": "",
    "reportText": "",
    "remarks": "",
    "ssboe": 1655291568,
    "usecs": 375696,
    "exchReceiptSsboe": 0,
    "exchReceiptNsecs": 0
}
```


**Response OPEN ORDER:**
 ```json
{
    "statusCode": "000",
    "notifyType": "OPEN",
    "statusOrder": "open",
    "orderID": "10111575",
    "instrumentType": "Future",
    "exchange": "CME",
    "symbol": "NQM2",
    "price": 12000.0,
    "currency": "USD",
    "priceType": 1,
    "transactiontype": 1,
    "quantity": 1,
    "duration": 1,
    "userId": "muunship@gmail.com",
    "accountId": "HK7567",
    "tradeExchange": "CME",
    "tradeRoute": "globex",
    "sequence_number": "ERJIG",
    "manualOrAuto": 1,
    "origPriceType": 1
}
```






Example failed orders response :

**Response:**
 ```json
{
    "statusCode": 1001,
    "success": false,
    "message": "Error, Please Login First before Create order"
}
```

Example failed orders response :

**Response:**
 ```json
{
    "statusCode": 1002,
    "success": false,
    "message": "Failed to Place order"
}
```

