class TrainIntent {
  constructor(app) {
    this.name = 'trainIntent';
    this.slots = {};
    this.utterances = require('./train-intent.json');
  }

  execute(req, res) {
    res.say('Right now, run for your life!');
    res.shouldEndSession(true);
  }
}

module.exports = TrainIntent;
