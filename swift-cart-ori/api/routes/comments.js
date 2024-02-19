import express from "express"
import { getComments, postComments } from "../controllers/comments.js"

const commentsRouter = express.Router()

commentsRouter.get("/:id", getComments)
commentsRouter.post("/:id", postComments)

export default commentsRouter