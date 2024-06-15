const Visitor = require('../models/visitor');

exports.getVisitorByEvent = async (req, res) => {
    try {
        const response = await Visitor.findAll({
            where: { id_event: req.body.id_event }
        });
        if (!response){
            return res.status(404).json({ error: 'Visitor not found' });
        }
    
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}

exports.createVisitor = async (req, res) => {
    try {
        const response = await Visitor.create(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}

exports.updateVisitor = async (req, res) => {
    try {
        const response = await Visitor.findByPk(req.params.id);
        if(!response) {
            return res.status(404).json({error: "Visitor not found"});
        } 
        await response.update(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}

exports.deleteVisitor = async (req, res) => {
    try {
        const response = await Visitor.findByPk(req.params.id);
        if(!response) {
            return res.status(404).json({error: "Visitor not found"});
        } 
        await response.destroy();
        res.json({msg: "Delete visitor successfully"});
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}