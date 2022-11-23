import calc from '../src/pages/demo/calc'

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(1052)
})

// describe('calc module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(calc(1, 2)).toBe(3);
//   });
// });

  