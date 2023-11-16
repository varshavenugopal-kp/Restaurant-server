const Restaurant = require("../Models/RestaurantModel.js");

const addRest = async (req, res) => {
    try {
        const { name, address, contact, description, image } = req.body;
        console.log("ji", req.body);
        const result = await Restaurant.create({
            name,
            address,
            contact,
            description,
            image,
        });
        res.status(200).json({ message: "success", data: result });
    } catch (error) {
        console.log(error);
    }
}

const getRest = async (req, res) => {
    try {
        const result = await Restaurant.findAll()
        console.log(result);
        res.status(200).json({ message: "success", data: result });
    } catch (err) {
        console.log(err);
    }
}

const getSingle = async (req, res) => {
    try {
        const id =parseInt( req.params.restId)
      
        const result = await Restaurant.findOne({ where: { id: id } })
        res.status(200).json({ message: "success", data: result });
    } catch (err) {
        console.log(err);
    }
}

const deleteRest = async (req, res) => {
    try {
        const { id } = req.body
        await Restaurant.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({ message: "success" });
    } catch (err) {
        console.log(err);
    }
}

const editRest = async (req, res) => {
    try {
        const { id, name, address, contact, description, image } = req.body;
        await Restaurant.update({ name: name, address: address, contact: contact, description: description, image: image }, {
            where: {
                id: id
            }
        })
        res.status(200).json({ message: "success" });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addRest,
    getRest,
    getSingle,
    deleteRest,
    editRest,
};
