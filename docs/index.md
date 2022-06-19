# Welcome to Hani Trade Services

### Introduction
**Hani Trade** is Platform Trade Which is have services to integrated with Rithmic API for the purpose of to make easy Trade,
let's go to learn deeply how this services can help you trade more easier.


### Conneting to The Services
- Base URL

FrontEnd Team need to open websocket connection and Try to connect with WebSocket URL **wss://hani_trade/rithmic_middleware:443**


```json
{
    "baseURL": "wss://hani_trade/rithmic_middleware:443
}
```

- Get System List

Before sending login request, clients should retrieve Rithmic System Name
to which they would like to connect. This information can be retrieved by
hit EndPoint **/system_list**


 >"URL": "wss://hani_trade/rithmic_middleware/system_list:443

 **Response:**
 ```json
{
    "statusCode": "000",
    "data": {
        "systemName": "Rithmic Test"
    }
}
```



