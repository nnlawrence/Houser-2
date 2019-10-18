module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses()
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errormessage: 'Nah'})
        })
    },
    addHouse: (req, res) => {
        const { name, address, city, state, zip } = req.body
        const db = req.app.get('db')
        console.log(req.body)
        db.add_house(name, address, city, state, zip)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errormessage: 'Aw Naw'})
        })
    },
    deleteHouse: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        db.delete_house(id)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errormessage: 'Nah Naaaw'})
        })
    },
    // getList: async (req, res) => {
    //     const db = req.app.get('db')
    //     let list = await db.get_list()
    //     console.log(list)
    //     res.status(200).send(list)
    // }
}