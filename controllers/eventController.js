const Event = require('../models/event');

exports.getEventByUser = async (req, res) => {
    try {
        const event = await Event.findAll({
            where: { id_user: req.body.id_user }
        });
        
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if(!event) {
            return res.status(404).json({error: "Event not found"});
        }
        await event.update(req.body);
        res.json(event);
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if(!event) {
            return res.status(404).json({error: "Event not found"});
        }
        await event.destroy();
        res.json({msg: "Delete event successfully"});
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}