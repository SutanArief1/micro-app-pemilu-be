import express from "express"
import UserControllers from "../controllers/UserControllers"
import ArticleControllers from "../controllers/ArticleControllers"
import PaslonControllers from "../controllers/PaslonControllers"
import PartaiControllers from "../controllers/PartaiControllers"

const Route = express.Router()

Route.post("/user", UserControllers.create)
Route.get("/user", UserControllers.find)
Route.put("/user", UserControllers.update)
Route.delete("/user", UserControllers.delete)
Route.post("/article", ArticleControllers.create)
Route.get("/article", ArticleControllers.find)
Route.put("/article", ArticleControllers.update)
Route.delete("/article", ArticleControllers.delete)
Route.post("/paslon", PaslonControllers.create)
Route.get("/paslon", PaslonControllers.find)
Route.put("/paslon", PaslonControllers.update)
Route.delete("/paslon", PaslonControllers.delete)
Route.post("/partai", PartaiControllers.create)
Route.get("/partai", PartaiControllers.find)
Route.put("/partai", PartaiControllers.update)
Route.delete("/partai", PartaiControllers.delete)

export default Route