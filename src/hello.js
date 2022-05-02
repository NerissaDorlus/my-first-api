import { response } from "express";

export const hello = (request, response) => {
  response.send("Hello is it me you're looking for?");
};

export const helloPerson = (request, response) => {
  const { person } = request.params; // here we extract person from the response
  response.send(`Hello there, ${person}`);
};

export const greetNewPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  response.send("hello there, ${firstName} ${lastName}.");
};
