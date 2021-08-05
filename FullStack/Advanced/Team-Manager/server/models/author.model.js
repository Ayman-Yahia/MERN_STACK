const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: { type: String,
        required: [true, "Player name is required"],
        minlength: [2, "Player name must be 2 characters long at least!"]
    },
    playerPosition: { 
        type: String,
     }

}, { timestamps: true });
module.exports.Player = mongoose.model('player', PlayerSchema);