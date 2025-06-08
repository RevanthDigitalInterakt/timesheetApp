const bcrypt = require('bcryptjs');

bcrypt.hash('123', 10, (err, hash) => {
  if (err) throw err;
  console.log(hash);
});
