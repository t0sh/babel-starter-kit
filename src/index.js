import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  const fullName = req.query.fullname.replace(/^\s*(.*)\s*$/, '$1');
  if ((fullName.length === 0) || (fullName.search(/[\d_\/]/) !== -1)) {
    res.send('Invalid fullname');
  }
  else {

  const fullNameArray = fullName.split(/\s+/);

  switch (fullNameArray.length) {
    case 1:
      let lastName = fullNameArray[0].toLowerCase().replace(/^./, letter =>
        letter.toUpperCase());
      res.send(lastName);
      break;
    case 2:
      lastName = fullNameArray[1].toLowerCase().replace(/^./, letter =>
        letter.toUpperCase());
      let nameLetter = fullNameArray[0].match(/./)[0].toUpperCase();
      res.send(lastName + ' ' + nameLetter + '.');
      break
    case 3:
      lastName = fullNameArray[2].toLowerCase().replace(/^./, letter =>
        letter.toUpperCase());
      nameLetter = fullNameArray[0].match(/./)[0].toUpperCase();
      const middleNameLetter = fullNameArray[1].match(/./)[0].toUpperCase();
      res.send(lastName + ' ' + nameLetter + '. ' + middleNameLetter + '.');
      break;
    default:
      res.send('Invalid fullname');
      break;
  }
}
})

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
