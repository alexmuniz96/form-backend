import { Router, Request, Response } from "express"
import { insertDev } from "./controllers/devController"

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    "statusCode": 200,
    "msg": "Api Running"
  })
})

router.post('/step4', insertDev)

export default router