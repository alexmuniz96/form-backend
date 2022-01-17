import { openDb } from "../db/config"
import { Request, Response } from 'express'


export async function createTable() {
  const db = await openDb()

  await db.exec(`
    CREATE TABLE IF NOT EXISTS
    desenvolvedor(id INTEGER PRIMARY KEY,
      nome TEXT,
      nivel INTEGER,
      email TEXT,
      github TEXT)
  `)

  await db.close()
}

export async function insertDev(req: Request, res: Response) {
  let desenvolvedor = req.body
  const db = await openDb()

  await db.run(`
    INSERT INTO desenvolvedor(nome,nivel,email,github)
    VALUES(?,?,?,?)`, [desenvolvedor.nome, desenvolvedor.nivel, desenvolvedor.email, desenvolvedor.github]);
  res.json({
    "statusCode": 200
  })

  await db.close()
}


