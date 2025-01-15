const mongoose=require ("mongoose")

const cardSchema = new mongoose.Schema({

    cardNumber : Number,
    cardHolderName: String,
    cardValid: String,
})

const Card = mongoose.model("Card",cardSchema)
module.exports = Card;