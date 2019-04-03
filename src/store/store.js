import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';

import {INCREMENT} from './types';
import {DECREMENT} from './types';
import {PLUS_X} from './types';
import {MULTIPLY_X} from './types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    counterStr: state => {
      return 'counter now is: ' + state.count;
    },
    justString: state => {
      return 'Just string';
    },
  },
  actions: {
    [MULTIPLY_X]({commit}, val) {
      setTimeout(() => {
        commit(MULTIPLY_X, val);
      }, 1000);
    },
  },
  mutations: {
    [INCREMENT](state) {
      state.count++;
    },

    [DECREMENT](state) {
      state.count--;
    },

    [PLUS_X](state, val) {
      state.count = state.count + val;
    },

    [MULTIPLY_X](state, val) {
      state.count = state.count * val;
    },
  },
  modules: {
    counter,
  },
});