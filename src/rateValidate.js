const rateValidate = (rate) => {
  if (typeof rate === 'undefined') {
    return { message: 'O campo "rate" é obrigatório' };
  }
  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' };
  }
  return {};
};

module.exports = rateValidate;
