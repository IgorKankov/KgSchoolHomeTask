let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log('Meow!')
  }
};

const catName = 'name';

console.log(cat[catName]);

cat.greeting();

cat.color = 'black';
