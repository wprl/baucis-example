An example server built using baucis.

    npm install baucis-example
    cd baucis-example
    node app

Then make HTTP GET requests like:

    http://localhost:3333/api/v1/vegetables
    http://localhost:3333/api/v1/vegetables?conditions={ "name": "tomato" }
    http://localhost:3333/api/v1/vegetables?conditions={ "name": { "$regex": "t" } }
    http://localhost:3333/api/v1/vegetables?select=_id
    http://localhost:3333/api/v1/vegetable/<_id>

Check out POST, PUT, HEAD, and DELETE requests as well.
