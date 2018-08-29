/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var passport = require('passport');
module.exports = {

  login: async function (req, res) {
      await passport.authenticate('google', {
        scope: ['email', 'profile']
      })(req, res);
    },

    callback: async function (req, res) {
        passport.authenticate('google', {
          scope: ['email', 'profile'],
        }, function (error, response) {
          if (error) {
            return res.status(400).json({
              message: "Invalid"
            });
          }
          return res.status(200).json({
            message: response
          });
        })(req, res);
      },

};
