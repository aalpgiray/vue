import { Component as component } from 'av-ts';
import { getHelper, Store } from 'kilimanjaro';
import * as Vue from 'vue';
import { store } from '../../store';

const { commit, getters } = getHelper(store);

/**
 * This is hello page handler
 * @export
 * @class Hello
 * @extends {Vue}
 */
@component({
  template: require('./index.html')
})
export class Hello extends Vue {
  @Store
  public message = getters('message');
  @Store
  public userName = getters('userName');
  @Store
  private setMessage = commit('setMessage');

  public buttonClicked() {
    this.setMessage('Goodbye');
  }

  public onInput(e: KeyboardEvent) {
    this.setMessage((<HTMLInputElement>e.target).value);
  }
}
