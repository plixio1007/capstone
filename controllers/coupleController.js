const Couple = require('../models/couple');

exports.getAllCouples = async (req, res) => {
    try {
        const couples = await Couple.findAll();
        res.json(couples);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.getCoupleById = async (req, res) => {
    try {
        const couple = await Couple.findByPk(req.params.id);
        if (couple) {
            res.json(couple);
        } else {
            res.status(404).json({error: 'Couple not found'});
        }
    } catch (error) {
        res.json(500).json({error: error});
    }
}

exports.createCouple = async (req, res) => {
    try {
        const couple = await Couple.create(req.body);
        res.status(201).json(couple);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.updateCouple = async (req, res) => {
    try {
        const couple = await Couple.findByPk(req.params.id);
        if (!couple) {
            return res.status(404).json({error: 'Couple not found'});
        }
        
        await couple.update(req.body);
        res.json(couple);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.deleteCouple = async (req, res) => {
    try {
        const couple = await Couple.findByPk(req.params.id);
        if(!couple) {
            return res.status(404).json({error: 'Couple not found'});
        }

        await couple.destroy();
        res.json(couple);
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}