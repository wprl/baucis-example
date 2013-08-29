Getting Started
---------------

This project is an example server built using baucis.  To install:

    git clone git@github.com:wprl/baucis-example.git
    cd baucis-example
    npm install
    node app

Now that the server is running, make HTTP GET requests like:

    http://localhost:3333/api/v1/vegetables
    http://localhost:3333/api/v1/vegetables?conditions={ "name": "tomato" }
    http://localhost:3333/api/v1/vegetables?conditions={ "name": { "$regex": "t" } }
    http://localhost:3333/api/v1/vegetables?select=_id
    http://localhost:3333/api/v1/vegetables/<_id>

Check out POST, PUT, HEAD, and DELETE requests as well…

Swagger
-------

You can also use Swagger to interact with baucis:

First, download the [swagger-ui](https://github.com/wordnik/swagger-ui) client.

    git clone git@github.com:wordnik/swagger-ui.git
    open swagger-ui/dist/index.html

Point it at your API. 

    http://localhost:3333/api/v1/api-docs

