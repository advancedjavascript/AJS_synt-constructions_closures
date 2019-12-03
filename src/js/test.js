import findBy from './app';

test('<урон> by: <name>', () => {
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const expected = [{ description: 'Страница описания элемента интерфейса', name: 'урон', type: 'help' }];
  const received = results.filter(findBy('name', 'урон'));
  expect(received).toEqual(expected);
});

test('<attack> by: <type>', () => {
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const expected = [{ description: 'Атака магическим заклинанием', name: 'заклинание', type: 'attack' }];
  const received = results.filter(findBy('type', 'attack'));
  expect(received).toEqual(expected);
});

test('<Персонаж, обладающий магическими способностями> by: <description>', () => {
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const expected = [{
    description: 'Персонаж, обладающий магическими способностями',
    name: 'маг',
    type: 'character',
  }];
  const received = results.filter(findBy('description', 'Персонаж, обладающий магическими способностями'));
  expect(received).toEqual(expected);
});
