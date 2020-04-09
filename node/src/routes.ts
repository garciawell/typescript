import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Wellington Garcia",
    email: "garciawell@gmail.com",
    password: "123123123",
    techs: [
      "Node",
      "React",
      "React Native",
      { title: "React 2", experience: 100 },
    ],
  });

  return response.json({ message: "Hello World" });
}
