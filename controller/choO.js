const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

module.exports = app => {

}

const createChoO = async (req, res) => {
    try {
        // FIXME: process the body
        const choO = await prisma.choO.create({
            data: {
                ...req.body,
            }
        });

        res.status(201).json(choO);
    } catch (err) {
        console.error(err);
        res.send({ error: err });
    }
};

const getChoOAll = async (req, res) => {
    try {
        // TODO: get chu nha
        const choO = await prisma.choO.findMany({
            select: {
                chuNha: {
                    select: {
                        ten: true
                    }
                }
            }
        });
        console.log(choO);
        res.status(200).json(choO);
    } catch (err) {
        console.error(err);
        res.send({ error: err });
    }
}

const deleteChoO = async (req, res) => {
    try {
        const choO = await prisma.choO.delete({
            where: {
                id: req.body.id,
            }
        });
        res.status(200).json(choO);
    } catch (err) {
        console.error(err);
        res.send({ error: err });
    }
}

const updateChoO = async (req, res) => {
    try {
        const choO = await prisma.choO.update({
            where: {
                id: req.body.id,
            },
            data: {
                ...req.body,
            }
        });
        res.status(200).json(choO);
    } catch (err) {
        console.error(err);
        res.send({ error: err });
    }
}

module.exports = {
    createChoO,
    getChoOAll,
    updateChoO,
    deleteChoO
}