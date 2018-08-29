const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const auth = require('./auth');

passport.use(new GoogleStrategy({
    clientID: auth.google.clientID,
    clientSecret: auth.google.clientSecret,
    callbackURL: auth.google.callbackURL
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));


// 
// process.nextTick(function () {
//   User.findOne({
//     userId: profile.id
//   }).done(function (err, user) {
//     if (err) {
//       return done(null, err);
//     } else {
//       if (!user) {
//         User.create({
//           userId: profile.id,
//           userName: profile.name
//         }).done(
//           function (err, createUser) {
//             if (err) {
//               return done(null, err);
//             } else {
//               return done(null, createUser);
//             }
//           });
//       } else {
//         return done(null, user);
//       }
//     }
//   });
// });

// require('passport-google-oauth').OAuth2Strategy;


// passport.serializeUser(function (user, done) {
//   done(null, user.userId);
// });

// passport.deserializeUser(function (id, done) {
//   User.findOne({
//     userId: id
//   }).done(function (err, user) {
//     if (err) {
//       done(null, null);
//     } else {
//       done(null, user);
//     }
//   });
// });
