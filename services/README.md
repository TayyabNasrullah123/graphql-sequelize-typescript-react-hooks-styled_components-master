# graphql-sequelize-typescript-react-hooks-mysql-crud-project

## Getting the database set up

`yarn` will install all necessary Node dependencies.

You will need Docker in order to install a containerised MySQL dev environment. After getting docker, run the following command anywhere:

```sh
docker run \
  -p 0.0.0.0:8000:3306 \
  --name crud-db \
  -e MYSQL_ROOT_PASSWORD=Kwanso@321 \
  -e MYSQL_USER=crud-dev \
  -e MYSQL_PASSWORD=Kwanso@321 \
  -e MYSQL_DATABASE=crud \
  -d mysql:8.0.27
```

This will create a Docker instance called `crud-db`, running MySQL v8.0.27, with the root password being `Kwanso@321`. It also creates a database called `crud`, creates a user called `crud-dev` (with password `Kwanso@321`), and assigns that user full permissions onto the `crud` database.
