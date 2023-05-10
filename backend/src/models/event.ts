const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 1 - Title
// 2 - image
// 3 - Body 100 character
// 4 - created date
const EventModelSchema = new mongoose.Schema({
    id: {
        type: String, 
        required: true, 
        unique: true
    }, 
    path: {
        type: String, 
        required: true, 
    }, 
    title: { 
        type: String,  
        required: true 
    }, 
    image: { 
        type: String,  
        required: true 
    }, 
    body: { 
        type: String,  
        required: true 
    },
    created_date: { 
        type: String, 
        required: true 
    }, 
});


const EventModel = mongoose.model('EventModel', EventModelSchema);

module.exports = EventModel;
