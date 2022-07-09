import { URLController } from "./controller/URLController";
import express from "express";
import { MongoConnection } from "./database/MongoConnection";
import PATH from "path";

const api = express();
api.use(express.json());
api.use(express.static(PATH.join(__dirname, "..", "public")));

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);

api.listen(5000, () => console.log("Express listening"));
