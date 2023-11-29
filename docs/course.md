# Course API Spec

## Create Course API

Endpoint : POST /api/course

Headers : 
- Authorization : token

Request Body :

```json
{
  "courseName" : "Belajar HTML",
  "thumbnail" : "src/assets/html.png",
  "courseType" : "Frontend",
  "describe" : "ini adalah sebuah deskripsi",
  "learning" : "ini adalah sebuah materi dengan total 1000 kata"
}
```

Response Body Success : 

```json
{
  "data" : {
    "id" : 1,
    "courseName" : "Belajar HTML",
    "thumbnail" : "src/assets/html.png",
    "courseType" : "Frontend",
    "describe" : "ini adalah sebuah deskripsi",
    "learning" : "ini adalah sebuah materi dengan total 1000 kata"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Course is not valid format"
}
```

## Update Course API

Endpoint : PUT /api/course/:id

Headers :
- Authorization : token

Request Body :

```json
{
    "courseName" : "Belajar HTML",
    "thumbnail" : "src/assets/html.png",
    "courseType" : "Frontend",
    "describe" : "ini adalah sebuah deskripsi",
    "n" : "ini adalah sebuah materi dengan total 1000 kata"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "courseName" : "Belajar HTML",
    "thumbnail" : "src/assets/html.png",
    "courseType" : "Frontend",
    "describe" : "ini adalah sebuah deskripsi",
    "n" : "ini adalah sebuah materi dengan total 1000 kata"
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

Endpoint : GET /api/course/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "courseName" : "Belajar HTML",
    "thumbnail" : "src/assets/html.png"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Course is not found"
}
```


## Get Course-Detail API

Endpoint : GET /api/course-detail/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "courseName" : "Belajar HTML",
    "thumbnail" : "src/assets/html.png",
    "courseType" : "Frontend",
    "describe" : "ini adalah sebuah deskripsi",
    "n" : "ini adalah sebuah materi dengan total 1000 kata"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Course is not found"
}
```

## Search Course API

Endpoint : GET /api/course

Headers :
- Authorization : token

Query params :
- name : Search by course name
- type : Search by CourseType


Response Body Success :

```json
{
  "data" : 
    {
      "id" : 1,
      "courseName" : "Belajar HTML",
      "thumbnail" : "src/assets/html.png"
    }
    
}
```

Response Body Error :

## Remove Course API

Endpoint : DELETE /api/course/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : "OK"
}
```

Response Body Error :

```json
{
  "errors" : "Course is not found"
}
```