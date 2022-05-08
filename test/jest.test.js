test('Devo conhecer as principais acertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Lara', mail: 'lara@mail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Lara');
  expect(obj.name).toBe('Lara');

  const obj2 = { name: 'Lara', mail: 'lara@mail.com' };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
