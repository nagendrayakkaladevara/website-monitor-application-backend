const { History } = require('../models/historycollectionModel');
const { Website } = require('../models/websitelinksStoreageModel');

exports.getAllWebsiteStatus = async (req, res) => {
    const websites = await Website.find();
    res.status(200).send(websites);
};

exports.createWebsite = async (req, res) => {
    const createPayload = req.body;

    // Basic validation
    if (!createPayload.url) {
        return res.status(400).json({ message: 'URL is required' });
    }

    const {
        url,
        status = 'unknown',
        lastChecked = new Date()
    } = createPayload;

    try {
        const newWebsite = await Website.create({
            url,
            status,
            lastChecked
        });

        res.status(201).json({
            message: 'Website added to collection',
            website: newWebsite
        });
    } catch (error) {
        res.status(500).json({ message: 'Error adding website to collection', error });
        console.error(error);
    }
};

exports.getWebsiteHistory = async (req, res) => {
    const { websiteId } = req.params;
    try {
        const history = await History.find({ website: websiteId }).sort({ checkedAt: -1 }).limit(10);
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch history' });
    }
};
