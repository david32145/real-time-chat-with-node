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
        await Message.create({owner, message})
        return res.status(201).send()
    }
}

export default new MessageController()