import { create } from 'kilimanjaro';

/**
 * This store handles helloPages state
 * @const { Opt } helloStore
 */
export const helloStore = create({
  message: 'Hello',
  user: {
    name: 'Alp'
  }
})
  .getter('message', s => s.message)
  .getter('userName', s => s.user.name)
  .mutation('setMessage', s => (message: string) => { s.message = message; });

