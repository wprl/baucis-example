An example server built using baucis.

    git clone git@github.com:wprl/baucis-example.git
    cd baucis-example
    npm install
    node app

Then make HTTP GET requests like:

    http://localhost:3333/api/v1/vegetables
    http://localhost:3333/api/v1/vegetables?conditions={ "name": "tomato" }
    http://localhost:3333/api/v1/vegetables?conditions={ "name": { "$regex": "t" } }
    http://localhost:3333/api/v1/vegetables?select=_id
    http://localhost:3333/api/v1/vegetables/<_id>

Check out POST, PUT, HEAD, and DELETE requests as well…
