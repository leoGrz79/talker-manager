const nameValidate = require('./nameValidate');
const ageValidate = require('./ageValidate');
const talkValidate = require('./talkValidate');

const talkerValidate = (talker) => {
  const name = nameValidate(talker.name);
  const age = ageValidate(talker.age);
  const talk = talkValidate(talker.talk);

  if (name.message) return name;
  if (age.message) return age;
  if (talk && talk.message) return talk;  
  return {};
};

module.exports = talkerValidate;