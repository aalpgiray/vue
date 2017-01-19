import { Component as component } from 'av-ts';
import * as Vue from 'vue';

/**
 *
 * This is main about page handler
 * @export
 * @class About
 * @extends {Vue}
 */
@component({
  template: require('./index.html')
})
export class About extends Vue {
  public message: string = 'Hello hmm';
}

export const index = About;
