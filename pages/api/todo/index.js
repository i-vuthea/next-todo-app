import { GET, POST } from "@constants/http_method";
import { DB } from "@databases/db";
import { Op } from "sequelize";
import Todo from "@databases/models/Todo";

export default function handler(req, res) {
    const METHOD = req.method

    switch (METHOD) {
        case GET:
            return list(req, res)

        case POST:
            return create(req, res)
    }

    return res.status(405).json({ message: 'Method not allow'})
}

async function list(req, res) {
    try {
        var where = {}
        if (req.query.name) {
            where = {
                name: {
                    [Op.like]: `%${req.query.name ?? ''}%`
                }
            }
        }

        var results = await Todo.findAll({
            // attributes: ['id', 'name', 'is_completed' , 'created_at'],
            where
        });


        return res.status(200).json({ data: results })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }
}

async function create(req, res) {
    try {
        var {todo} = req.body

        await new Promise((resolve, reject) => {
            DB.run('INSERT INTO todos(name) values(?)', [todo], (error) => {
                if (error) return reject(error)
                resolve(true)
            })
        })

        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(500).json({ error })
    }
}