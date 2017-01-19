import { create } from 'kilimanjaro';
import { helloStore } from './components/Hello/hello.store';

/**
 * Main Store
 */
export const store = create()
  .module('hello', helloStore).done();
