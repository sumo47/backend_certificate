const certificateModel = require('../models/Certificate')


const addCertificate = async (req, res) => {
    try {
        let data = req.body
        let { name, subtitle, date } = data

        if (!name) return res.status(404).send({ status: false, message: "Name required" })
        if (!subtitle) return res.status(404).send({ status: false, message: "subtitle required" })
        if (!date) return res.status(404).send({ status: false, message: "date required" })
        let saveData = await certificateModel.create(data)
        res.status(200).send({status:true, message:saveData._id})
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

}

module.exports.addCertificate = addCertificate