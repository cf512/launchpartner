const db = require("../models");

// Methods for the controller
module.exports = {
  findAll: function (req, res) {
    db.Character
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Character
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Character
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Character
      .findById(req.params.id, function (err, dbModel) {
        if (!dbModel)
          res.status(404).send("Data not found.");
        else {
          dbModel.name = req.body.name;
          dbModel.from = req.body.from;
          dbModel.about = req.body.about;
          dbModel.image = req.body.image;
          dbModel.date = req.body.date;

          dbModel.save().then(dbModel => {
            res.json('Character updated!');
          })
            .catch(err => {
              res.status(400).send("Update not possible");
            });
        }
      });
  },
  remove: function (req, res) {
    db.Character
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};