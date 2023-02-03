import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://diogoalvino:diogoalvino12345@web2.qa8aobi.mongodb.net/Livraria')

let db = mongoose.connection

export default db