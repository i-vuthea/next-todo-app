import { DELETE, PUT } from "@constants/http_method"

export default function handler(req, res) {
    const METHOD = req.method

    switch (METHOD) {
        case PUT:
            return update(req, res)

        case DELETE:
            return destroy(req, res)
    }

    return res.status(405).json({ 'message': 'Method not allow', method:  req.method})
}

function update(req, res) {

}

function destroy(req, res) {

}