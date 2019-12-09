import { Message } from '../database/models'

class MessageController {

    // List all messages
    async index(req, res) {
        const data = await Message.findAll()
        return res.status(200).json(data)
    }

    // Writer an new message
    async store(req, res) {
        const { owner, message } = req.body
        const data = await Message.create({owner, message})
        req.io.emit('broadcast', data)
        return res.status(201).send()
    }
}

export default new MessageController()