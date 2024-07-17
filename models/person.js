const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

personSchema.pre('save', async function (next) {
    const person = this;
    if (!person.isModified('password')) return next();
    try {
        const roundSalt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(person.password, roundSalt);

        person.password = hashPassword;

        next();
    } catch (err) {
        return next(err);
    }
})

personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
}


const Person = mongoose.model('coll1', personSchema);
module.exports = Person;