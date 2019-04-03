<template>
    <div>
        <button class="btn btn-info" @click="increment(100)">Increment</button>
        <button class="btn btn-info" @click="decrement(2)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>