# API RUN

```
1. $ docker-compose up -d


```

# API ENDPOINT

**POST products**

1. http://localhost:6868/api/products

Body
{
"name": "Sandia50",
"price": 20000,
"brand": "Fruta",
"description": "Sandia50",
"discount": 50
}

**GET all product**

1. http://localhost:6868/api/products

**Search be name**
**is valid polidromo**

1. http://localhost:6868/api/products/serach/solos

**GET Search be description and brand**
**min 3 characters**

1. http://localhost:6868/api/products/search/desc/Sandia
2. http://localhost:6868/api/products/search/desc/Sa

**GET be Id**
http://localhost:3000/api/products/:productId
