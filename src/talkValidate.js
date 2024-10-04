const rateValidate = require('./rateValidate');

const DATA_REGEX = /^\d{2}\/\d{2}\/\d{4}$/;

const talkValidate = (talk) => {
  if (!talk) {
    return { message: 'O campo "talk" é obrigatório' };
  }
  if (!talk.watchedAt) {
    return { message: 'O campo "watchedAt" é obrigatório' };
  }
  if (!DATA_REGEX.test(talk.watchedAt)) {
    return { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
  }  
  if (rateValidate(talk.rate)) {
    return rateValidate(talk.rate);
  }
};

module.exports = talkValidate;