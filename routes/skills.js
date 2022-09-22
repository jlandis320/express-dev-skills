import { skills } from "../data/skill-data.js"
import { Router } from "express"

const router = Router()

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router
}