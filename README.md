Deployed backend -  https://backrecipes.herokuapp.com

Deployed frontend - https://frontrecipes1.herokuapp.com




# Authentication using JSON Web Tokens (JWTs) Module Project

## Introduction

In this project we'll implement a full authentication workflow (register/login/logout/restrict endpoint) using `Node.js`, `Express`, `SQLite` and `JSON Web Tokens` on the server.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git `push origin <firstName-lastName>`.

### Task 2: Minimum Viable Product

Use Node.js, Express and Knex to build an API that provides _Authentication_ functionality using SQLite to store _User_ information.

The user schema should include: `username`, `password` and `department`. The `department` should be a string used to group the users. No need for a `departments` table or setting up  relationships.

Use **JSON Web Tokens** to keep users authenticated across requests.

### Design and build the following endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                            |
| POST   | /api/login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!' |
| GET    | /api/users    | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.                                                                  |

### Task 3: Stretch Goals

- add the code necessary so that when a client makes a `GET` request to `/api/users` the server only returns documents with the `same department` as the logged in user. For example if the logged in user belongs to the finance department, then only users with the _finance_ department should be returned; if the logged in user is in _sales_ only users on the sales department should be returned.
- implement a React client:
  - use `create-react-app` to generate a application to server as the client for the Web API.
  - inside the React application add **client-side routes** and components for `signup`, `signin` and showing the `list of users` stored in the database.
  - the `/signup` route should provide a form to gather `username`, `password` and `department` for the user and make a `POST` request to the `/api/register` route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the `/users` route, where they should see the list of users.
  - the `/signin` route should provide a form to gather `username` and `password` for the user and make a `POST` request to the `/api/login` route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the `/users` route.
  - the `/users` route should read the token from local storage and make a `GET` request to the `/api/users` route on the API attaching the token as the value of the `Authorization` header.
  - provide a button to `sign out` that will remove the token from local storage.
- add any extra functionality to make the application more user friendly like showing a message and redirecting to `/signin` if an unauthenticated user tries to access the list of users in the `/users` route.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge `<firstName-lastName>` Branch into main (student's  Repo). **Please don't merge your own pull request**
heroku git:remote -a backrecipes 
================================
Encrypted  Stagged Dev Production .env POSTGRES files in ASC format
------------------------------
--- The Production Version on Heroku
-----BEGIN PGP MESSAGE-----

jA0ECQMCkRgHo9PfWu7/0ukBSt1fAcMWsbSy3V9WZk3vSc+zsJI33Vhv5umS88Sr
w4UmC0pMrzbLQMoWgsx5GSwk9tOfr3iC9Qs6Frz1mNzNQA2qSEpFxPgc1ZY45APU
ElFMp2FnsX7feHdpgjZ9puIwQ36/+4cLtvEVhelgj5poXxEfArRjYNAajVfsClsg
g/mbsjpVaK2RvP6d19cjdSM+gjtVQdDUO1fRv9niSXLlwNBJ0AAiWrebzuaHpcqy
B+2CMuh5mri5FXTMThv0J/VGa4uibZMxAzqespLr57ICje6Y6W+LfQ2tlNNFQ7jj
nznLlk08f2aFNUKLBZbh81orvrDLstoZvuM/SrIKFtNqtyxYcVFgjmcSEknVrKKo
JOXJgTuVwX+pLeeO4ZTJdhb6ZS24+a2A6lYfnKUbj4jJMAc0fTzUkBt+HVXmzM+e
fAoNFSv7DSe96tOyYktKP6vN2OAydFsyMgs127gDRfk2C02AXu8mKCTA3WWSj0m2
de4h3K0Z+OjKksApEQs76V92vfuRNlf9zjEec0N7UdcM7HeCBlQC3qf924R5NE9m
h1eZLdgQ8icBUhu7GQDWNyW5oVnqFiMU7cSokWp4mvMitpzVtPpEpAZGI7Y/ipNA
QrwKzSzWVzBTlx2ONkrc2oEmxI29GC4EkDRmcBsa+lgeXWTi+jPOjstY9VR4e3XJ
DAscpLHgfFyU/aju+w==
=1J/0
-----END PGP MESSAGE-----
--- One Messup and the others a Local Dev version with Postgres 
-----BEGIN PGP MESSAGE-----

jA0ECQMCmo6h7vBUfdj/0ukBJxGYbgYyAaxe5vlqKGo9LXc8jSKI114sww4EfIsn
tS/zke/F2OjMn2vQQqtRZ6PIRBRyLhD9fWPXphX+2dwVq++8xUJbaixrWflsdy6O
ycB1Nuh5C18OL83GxVEejgrC6ZMZGCPul+Z5DY59khxq7orQB3Agxw/rQOHmpO9M
AdxgxMDnl8eTUcRbIqx5vUg1wUkVzhtOEMR0SCXpfYt8faIeI9NbPz3ROBHFaOHE
rTQO4OdBq/OPkn6KbJFsGwZU0nJY6YCzVcyVqIjdsdbclICkztdxnT2Sx7OE4zg5
SyNQMBv6a/LqMD2G/QNjzelDa1QoYwx+1d+KF2hFGGZArfCVl/zuiTER9S0ECLLO
nmv7c6Dph624jIuzPZnoFn4vKnGsyAbrT3c1/635TIn64nEGEI0bBeSPB8jeKT5a
/DY/AyOkc4ZopUwm1qh0VxvK4+BoqvctrEUp4QlFGhBpLjTASRXW+LjBDeSZR7ct
sui3wk0uCFyRv2fHbinC/cO4u3VxyFSI1rcMnf9NzXcRQta+fr40jcOF7rMEL+fq
QIOFt1x+QUearaWoO1rPyzbZUzMlJ5aATkF5A/rIRGSqIOfovjMItWHTCVHUnPn7
9hCxS1R5MaV+UCy9LZesdfWfHJX9/EwNO4ZmSJd0beUiNO6gfWMimID1A1sIOl3D
hQmTZYOqcT5hi5A=
=2DgO
-----END PGP MESSAGE-----
-----BEGIN PGP MESSAGE-----

jA0ECQMCORRkXJQt9/z/0sEOAaYdR8V1UTmPY0YgmZNC9tXh6OT8JO22LbJgtGgH
yQdaD3T0saS8G4o9vxG6T9DQoW0spYg1m+u42REmwKBA2D3pucV9If8Uo5VFoQrT
9mnysfnXUOA88tS6vwh7iLwADm34Dq6BFAOrF3evIu2qpBBkbj7D5beFDflJ42oU
5tST8Vd8BayG16PAWL/KYvLDD10SXG4rKYNzeRvT3PGGQHb78w3HrSqOaI2Zz781
8pUvW8F/Uoewceckz78Haprrc7yfSF4xshrdEMOx216BSGPZb/Mjqy4GOPjrrcLg
6xpnYXucySg86XuvUvz2OATtIPRah4jxVQ0KsfSPXWPzMzU6ppWFTlBDcbnGBwb6
WPRtIB5eOzxWAD/tVyldptgko2yaL1ciLM6DKEQcYIsgKjjYn1StpDoP/9/UeR0S
CW/SYdWRF/qbxG2maMYbOrlHhvL2spnONcnXgcOBWYiNk63IZXzCRszof8fJdqyE
V2TtvQ7yXEJtga7HZaX3Q6GiXZcvuTFblVvy3AsxLmWAv3lf6c1EKUQcC0hCJm30
3kC8CUG/Ok2OZuLEvuTFEEXwEKcUeGscLbdSdmejHOO+QRg1yjf6miRniPlsrq1m
=rCnc
-----END PGP MESSAGE-----
