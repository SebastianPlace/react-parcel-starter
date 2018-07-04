import { capitalize } from './strings'

test('it capitalizes the first letter of each word', () => {
  expect(capitalize('quick brown fox')).toBe('Quick Brown Fox')
})
