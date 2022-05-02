import express, { response } from "express";

import { hello, helloPerson, greetNewPerson } from "./src/hello.js";

import { welcomeHome } from "./src/welcome.js";

const app = express();
app.use(express.json());
const PORT = 3030;

//routes(list of aloud requests)

app.get("/hello", hello);
app.post("/hello", greetNewPerson);
// below: person is a param that gets attached to the response
app.get("/hello/:person", helloPerson);

app.get("/", (request, response) => {
  response.send("These are not the droids you're looking for. 👋🏾 ");
});

app.get("/", welcomeHome);

app.listen(PORT, () => console.log(`listen on http://localhost:${PORT}...`));
