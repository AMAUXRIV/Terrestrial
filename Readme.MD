<B>

# API => U S E R

## - Sign Up 
```
Endpoint : POST /api/users/signup
```
Request Body :


```json
{
    "email": "rusli@gmail.com",
    "name":"rusli",
    "password":"sstt"
}
```
Response Body Success :

```json
{
    "error": false,
    "message": "User Created"
}
```
Response Body Failed :

```json
{
    "errors": "email already exists"
}
```
## - Login User API
```
Endpoint : POST /api/users/login
```
Request Body :

```json
{
    "email": "rusli@gmail.com",
    "password":"sstt"
}
```
Response Body Success :

```json
{
    "error": false,
    "message": "Success Bro",
    "loginResult": {
        "token": "c6b996e9-d79e-496e-9861-0b4ee10e88d3"
    }
}
```

Response Body Failed :

```json
{
    "errors": "email or password wrong"
}
```

## - Get User API
```
Endpoint : GET /api/users/current
```
Headers:
- Authorization : token

Response Body Success :
```json
{
    "data": {
        "email": "rusli@gmail.com",
        "name": "rusli"
    }
}
```

Response Body errors :
```json
{
    "error":"unauthorized",
}
```

## - Update User API
```
Endpoint : PATCH /api/users/
```
Request  Body :

Headers:
- Authorization : token

Request Body :

```json
{
    "name":"Bujang",    //optional
    "password":"hidup" //optional
}
```

Response Body Success :

```json
{
    "data": {
        "email": "rusli@gmail.com",
        "name": "Bujang"
    }
}
```
Response Body Failed :

```json
{
    "errors": "Name Max length 100"
}

```


## - Logout User API
```
Endpoint : DELETE api/users/logout
```
Headers:
- Authorization : token

Response Body Success :

```json
{
    "error": false,
    "message": "Logout Success"
}
```
Response Body errors :
```json
{
    "error":"unauthorized",
}
```
## =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  = = =  =  =  =  =  =  
# API => C O U R S E

## Create Course API

```
Endpoint : POST /api/course/create
```

Headers : 
- Authorization : token

Request Body :

```json
{
  "courseName" : "Belajar Ngaji",
  "thumbnail" : "src/assets/html.png",
  "courseType" : "Backend",
  "describe" : "ini adalah sebuah deskripsi",
  "learning" : "ini adalah sebuah materi dengan total 1000 kata"
}
```

Response Body Success : 

```json
{
    "data": {
        "id": 7,
        "courseName": "Belajar Ngaji",
        "thumbnail": "src/assets/html.png",
        "courseType": "Backend",
        "describe": "ini adalah sebuah deskripsi",
        "learning": "ini adalah sebuah materi dengan total 1000 kata"
    }
}
```

Response Body Error :

```json
{
  "errors" : "Course is not valid format"
}
```

## Get Course API
```
Endpoint : GET /api/course
```
Headers :
- Authorization : token

Response Body Success :

```json
{
    "error": false,
    "message": "All course retrieved",
    "data": [
        {
            "id": 4,
            "courseName": "Belajar HTML",
            "thumbnail": "src/assets/html.png",
            "courseType": "Frontend"
        },
        {
            "id": 5,
            "courseName": "Belajar HTML",
            "thumbnail": "src/assets/html.png",
            "courseType": "Backend"
        }
    ]
}
```

Response Body Error :

```json
{
  "errors" : "Course is not found"
}
```

## Get Detail Course API
```
Endpoint : GET /api/course/:id |(5)
```
Headers :
- Authorization : token

Response Body Success :

```json
{
    "error": false,
    "message": "Contact detail retrieved",
    "data": {
        "id": 5,
        "thumbnail": "src/assets/html.png",
        "describe": "ini adalah sebuah deskripsi",
        "learning": "ini adalah sebuah materi dengan total 1000 kata"
    }
}
```

Response Body Error :

```json
{
  "errors" : "Course is not found"
}
```