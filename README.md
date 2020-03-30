<h1 align="center">
    <img src="./.github/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6a736e6f6d61642f696d6167652f75706c6f61642f76313534373035303430392f61646f6e69736a732d72656163742e706e67.png" width="300px" >
</h1>

<h2 align="center">
    CRUD USERS - Users CRUD using AdonisJs and React Js
</h2>

<h3 >
    Technologies
</h3>

- [AdonisJs](https://adonisjs.com/)
- [ReactJs](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Material-ui](https://material-ui.com/)
- [Formik](https://jaredpalmer.com/formik/docs/overview)
- [Styled Componets](https://styled-components.com/)

# Cloning this project

```
$ git clone https://github.com/RennanD/crud-usuarios-adonis.git
```

# ❗️ Requisites

To runed this all project, you need have be the packages installed:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://legacy.yarnpkg.com/en/) (Optional).

# 💾 Backend

- API RESTFUL created with Node.js and Adonis.

- For database use PostgresSQL.

## ⚡️ Start

- For use this api you need have be installed PostgresSQL, I'm use [Docker](https://www.docker.com/), but this is optional.
- If you don't want installing DOCKER, use convencional [Postgres](https://www.postgresql.org/download/) installation.

### Runing Postgres using DOCKER: 🐋

```
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

#### If you already have a container with Postgres, runing Postgres container, ex.:

```
$ docker start "CONTAINER_ID"
```

## Envaironments variables

- In backend folder, create in root folder a .env file.
- Use the .env.example file as the basis for the .env file.

## Now in your terminal, run:

```
$ cd backend
$ adonis migration:run
```

### Testing your API:

```
$ adonis test
```

### Using your API:

```
$ adonis serve --dev
```

- Use [this host](http://localhost:3333) to run your API;

# API Routes:

## Users [/users]

### List all users [GET]

- Response 200 (appication/json)

  - Attributes (Users)

- Response 404 (appication/json)
  - Attributes (Error)

### List only user [GET]

- Requets

- Headers

  - Accept: application/json
  - Content-Type: application/json

  - Route Params
    ```js
    "/users/user_id";
    ```

- Response 200 (appication/json)

  - Attributes (Users)

- Response 404 (appication/json)
  - Attributes (Error)

### Register new users [POST]

- Request register new user

  - Headers

    - Accept: application/json
    - Content-Type: application/json

  - Body

    ```json
    {
      "name": "",
      "email": "",
      "gender": "",
      "born_date": "",
      "bio": ""
    }
    ```

  - Response 201 (appication/json)
    - Attributes (Users)

### Update user [PUT]

- Request register new user

  - Headers
    Accept: application/json
    Content-Type: application/json

  - Route Params

    ```js
    "/users/user_id";
    ```

  - Body
    ```json
    {
      "name": ""
    }
    ```

- Response 200 (appication/json)
  - Attributes (Users)

### Excluir ferramentas [DELETE]

- Request Cadastrar um ferramenta

  - Headers
    Accept: application/json
    Content-Type: application/json

  - Attributes (Users)

  - Route Params
    ```js
    "/users/user_id";
    ```

- Response 204 (appication/json)
  - Attributes (Success)

# 💻 Web Application

<h1 align="center">
    <img src ="https://github.com/RennanD/Marketbook/blob/master/assets/browser.svg" width="150px" />
</h1>

<h3 align="center">
    Application that consumes our api rest with Adonis.
</h3>

## ⚡️ Start

Open a new tab or window in the terminal, and run:

```bash
$ cd frontend
$ yarn
$ yarn start
```

Or using npm:

```bash
$ cd frontend
$ npm install
$ npm start
```

# Demo Web app

<h1 align="center">
<img src ="./github/crud-usuarios.gif" width="700px">
</h1>
