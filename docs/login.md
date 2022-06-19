# Welcome to Login section

### Login System

- Login Request

Before place order, clients should Connect To the Login EndPoint and send parameter as follows.

 >"URL": "wss://hani_trade/rithmic_middleware/login:443

**Request:**
 ```json
{
    "systemName": "Your system name",
    "infraType": "2",
    "username": "Your Email",
    "password": "Rour Password",
}
```

And if login success, clients should get json reponse as follows.

**Response:**
 ```json
{
    "statusCode": "000",
    "templateVersion": 11,
    "rpCode": "0",
    "fcmID": "Rithmic-FCM",
    "ibID": "Prospects",
    "countryCode": "US",
    "stateCode": "NY",
    "heartbeatInterval": 60.0
}
```

Example failed login with wrong credentials :

**Response:**
 ```json
{
    "statusCode": 1032,
    "message": {
        "rpCode": "13",
        "messageError": "permission denied"
    }
}
```

Example failed login with Bad Request Parameter:

**Response:**
 ```json
{
    "statusCode": 1005,
    "success": false,
    "message": "Bad Request, invalid Json Type"
}
```
**For More Detail status Code ** you can see at **Response Code section**