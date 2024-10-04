const ageValidate = (age) => {
  if (!age) {
    return { message: 'O campo "age" é obrigatório' };
  }
  if (age < 18 || typeof age !== 'number' || !Number.isInteger(age)) {
    return { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' };
  }
  return {};
};

module.exports = ageValidate;