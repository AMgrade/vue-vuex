<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <br>
        <app-another-counter></app-another-counter>
        <hr>
        <input class="form-control" type="text" v-model="value" @input="updateValue">
        <p>{{ counter }}</p>
        <p>Counter plus one: {{ countPlusOne }}</p>
        <p>{{ counterStr }}</p>
        <p>{{ justString }}</p>
        <p>
          <button @click="increment" class="btn btn-default">+</button>
          <button @click="decrement" class="btn btn-default">-</button>
          <button @click="plusX(3)" class="btn btn-default">+ X</button>
          <button @click="multiplyX(2)" class="btn btn-default">* X</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AnotherCounter from './components/AnotherCounter.vue';
  import Result from './components/Result.vue';
  import AnotherResult from './components/AnotherResult.vue';
  import {mapState} from 'vuex';
  import {mapGetters} from 'vuex';
  import {mapMutations} from 'vuex';
  import { INCREMENT } from './store/types';
  import { DECREMENT } from './store/types';
  import { PLUS_X } from './store/types';
  import { MULTIPLY_X } from './store/types';

  export default {
    computed: {
        value: {
            get() {
                return this.$store.getters.value;
            },
            set(value) {
                this.$store.dispatch('updateValue', value);
            }
        }
    },
    methods: {
        updateValue(event) {
            this.$store.dispatch('updateValue', event.target.value);
        }
    },
    components: {
        appCounter: Counter,
        appAnotherCounter: AnotherCounter,
        appResult: Result,
        appAnotherResult: AnotherResult,
    },
  };
</script>

