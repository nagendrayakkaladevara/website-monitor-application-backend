const { Website } = require('../models/websitelinksStoreageModel');
const { History } = require('../models/historycollectionModel');
const axios = require('axios');


const checkStatus = async () => {
    try {
        const websites = await Website.find();
        for (const website of websites) {
            try {
                await axios.get(website.url);
                website.status = 'Up';
                console.log(`Status of: ${website.url} -> UP`);
            } catch (error) {
                website.status = 'Down';
                console.log(`Status of: ${website.url} -> DOWN`);
            }
            website.lastChecked = new Date(); 
            await website.save();
  
            // Save history
            const historyEntry = new History({ 
                website: website._id, 
                status: website.status,
                checkedAt: website.lastChecked,
            });
            console.log(historyEntry);
            await historyEntry.save();
        }
    } catch (error) {
        console.error('Error fetching websites:', error.message);
    }
};

module.exports = checkStatus;
