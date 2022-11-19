const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

const createChoO = async (req, res) => {
    try {
        // FIXME: process, verify the body
        const choO = await prisma.choO.create({
            data: {
                ...req.body
            }
        });

        res.status(201).json(choO);
    } catch (err) {
        console.error(err);
        res.status(422).send({ error: err });
    }
};

const getChoOAll = async (req, res) => {
    try {
        // TODO: get chu nha
        const choO = await prisma.choO.findMany({
            include: {
                chuNha: true
            }
        });
        res.status(200).json(choO);
    } catch (err) {
        console.error(err);
        res.send({ error: err });
    }
}

const getChoOTheoId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const choO = await prisma.choO.findUnique({
            where: {
                id: id
            },
            include: {
                chuNha: true
            }
        });
        if (choO) {
            res.status(200).json(choO);
        } else {
            res.status(404).json({ message: "Not found" });
        }
    } catch (err) {
        console.error(err);
        res.send({ error: err });
    }
}

const deleteChoO = async (req, res) => {
    try {
        const choO = await prisma.choO.delete({
            where: {
                id: req.body.id
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
                id: req.body.id
            },
            data: {
                ...req.body
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
    deleteChoO,
    getChoOTheoId
};