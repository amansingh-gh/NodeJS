const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person')

passport.use(new LocalStrategy(async (usernamee, password, done) => {
    // authentication logic
    try {
        console.log(`Recieved Credentials: Username: ${usernamee}, Password: ${password}`);
        const user = await Person.findOne({ username: usernamee })
        if (!user) {
            return done(null, false, { message: 'Incorrect Username' });
        }
        const isPasswordMatch = await user.comparePassword(password);

        if (isPasswordMatch) {
            return done(null, user)
        }
        else {
            return done(null, false, { message: 'Incorrect Password' })
        }
    } catch (err) {
        return done();
    }
}))
module.exports = passport;

