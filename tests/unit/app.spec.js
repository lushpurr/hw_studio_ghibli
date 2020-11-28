import App from '@/App.vue';
import {charactersData} from './characters.js';
import {shallowMount} from '@vue/test-utils';
import fetch from 'fetch-mock';

describe('App', () => {
  let wrapper;

  beforeEach(async () => {
    fetch.once('https://ghibliapi.herokuapp.com/people', JSON.stringify(charactersData));
    wrapper = shallowMount(App);
    await wrapper.vm.$nextTick();
    fetch.reset();
  });

  it('should have 2 characters', () => {
    expect(wrapper.vm.characters).toHaveLength(2);
  });

})
