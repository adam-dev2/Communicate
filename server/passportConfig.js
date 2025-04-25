const LocalStrategy = requie('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const User = require('./models/User')

const intializeUser = (passport)=>{
    passport.use(new LocalStrategy(async (username,password,done) => {
        const user = await User.findOne({username});
        if(!user) {
            return done(null,false,{message: 'No user found'});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) {
            return done(null,fakse,{message: `Incorrect Password`})
        }

        return done(null,user);
    }))

    passport.serializeUser = ((user,done)=>{
        return done(null,user.id)
    })

    passport.deserializeUser = (async(id, done) => {
        const user = await User.findById(id);
        return done(null,user);
    })
}

module.exports = intializeUser;