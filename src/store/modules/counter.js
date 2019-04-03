import * as types from '../types.js';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    doubleCounter: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: (state, by) => {
        state.counter += by;
    },
    decrement: (state, by) => {
        state.counter -= by;
    },
};

const actions = {
    increment: ({commit}, by) => {
        commit('increment', by);
    },
    asyncIncrement: context => {
        setTimeout(function() {
            context.commit('increment')
        }, 1000);
    },
    decrement: context => {
        context.commit('decrement');
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout(function() {
            commit('decrement', payload.by)
        }, payload.duration);
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};