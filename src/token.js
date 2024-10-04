// stackOverFlow
function createToken() {
  let randomToken = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 16; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomToken += characters.charAt(randomIndex);
  }

  return randomToken;
}

module.exports = createToken;