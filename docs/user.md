# User API Spec

## Register User API
Endpoint : POST /api/users

Request Body :


```json
{
    "username":"amx",
    "password":"sstt",
    "name":"amau ganteng"
}
```
Response Body Success :

```json
{
    "data": {
        "username":"amx",
        "name":"amau ganteng"
    }
}
```
Response Body Failed :

```json
{
    "errors": "messages"
}
```
## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username":"amx",
    "password":"sstt",
    
}
```
Response Body Success :

```json
{
    "data": {
        "token":"unique-token"
    }
}
```

Response Body Failed :

```json
{
    "errors": "username or password wrong"
}
```

## Get User API
Endpoint : PATCH /api/users/current

Headers:
- Authorization : token

Response Body Success :
```json
{
    "username":"amx",
    "name":"amau ganteng"
}
```

Response Body errors :
```json
{
    "error":"unauthorized",
}
```

## Update User API
Endpoint : PATCH /api/users/

Request  Body :

Headers:
- Authorization : token

```json
{
    "name":"amau ganteng", //optional
    "password":"sstt", //optional
    
}
```

Response Body Success :

```json
{
    "data": {
        "username":"amx",
        "name": "amau ganteng poll"
    }
}
```
Response Body Failed :

```json
{
    "errors": "Name Max length 100"
}

```


## Logout User API
Endpoint : DELETE api/users/logout

Headers:
- Authorization : token

Response Body Success :

```json
{
    "data":"OK"
}  
```
Response Body errors :
```json
{
    "error":"unauthorized",
}
```