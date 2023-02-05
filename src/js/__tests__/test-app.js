import Team from '../app';
import Character from '../character';

test('Add a new character on the team', () => {
  const expected = {
    name: 'Ivan',
    level: 15,
  };

  const team = new Team();
  team.add(new Character('Ivan', 15));

  expect([...team.members][0]).toEqual(expected);
});

test('Add a new character on the team (already exists)', () => {
  expect(() => {
    const team = new Team();
    const character = new Character('Ivan', 15);
    team.add(character);
    team.add(character);
  }).toThrowError(
    new Error('Такой персонаж уже находится в команде!'),
  );
});

test('Add a several new characters on the team', () => {
  const expected = [
    {
      name: 'Ivan',
      level: 15,
    },
    {
      name: 'Dmitry',
      level: 16,
    },
  ];

  const team = new Team();
  team.addAll(new Character('Ivan', 15), new Character('Dmitry', 16));

  expect([...team.members]).toEqual(expected);
});

test('Transformation the team to array', () => {
  const expected = [
    {
      name: 'Ivan',
      level: 15,
    },
    {
      name: 'Dmitry',
      level: 16,
    },
  ];

  const team = new Team();
  team.addAll(new Character('Ivan', 15), new Character('Dmitry', 16));

  expect(team.toArray()).toEqual(expected);
});