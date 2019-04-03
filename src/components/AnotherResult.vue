<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ clicksNumber }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types.js';

    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                clicksNumber: types.CLICK_COUNTER,
            })
        }
    }
</script>