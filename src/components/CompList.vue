<template>
    <div class="comp-list">
        
            <comp-mon-hoc
                v-for="(value,key) in allMonHoc"
                v-bind:key="key"
                v-bind:MonHoc="value"
                v-if="!value.trangthai" 
            />
                <!-- v-on:suaMonHoc = "suaMonHoc" -->
    </div>
</template>

<script>
import CompMonHoc from './CompMonHoc.vue';

import { mapGetters } from "vuex";
export default {
    name: "comp-list",
    data() {
        return {

        }
    },
    computed:{
        ...mapGetters(["allMonHoc"])
    },
    components: {
        CompMonHoc
    },
    // methods: {
    //     suaMonHoc(data){
    //         console.log('đây là chưa học',data.id);
    //         this.$emit('AppsuaMonHoc',data);
    //     }
    // }
};
</script>

<style>

</style>