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

  it('should have a name', () => {
    const expected = "Dola"

    expect(wrapper.vm.characters[0].name).toMatch(expected);
  });

  it('should have a film array', () => {
    const expected = ["https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"]
      
    expect(wrapper.vm.characters[0].films).toContain("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
  });

})
