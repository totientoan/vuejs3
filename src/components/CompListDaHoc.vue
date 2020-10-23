<template>
    <div class="comp-list-da-hoc">
        
            <comp-mon-hoc
                v-for="(value,key) in allMonHoc"
                v-bind:key="key"
                v-bind:MonHoc="value"
                v-if="value.trangthai"
            />
                <!-- v-on:xoaMonHoc = "xoaMonHoc" -->
    </div>
</template>

<script>
import CompMonHoc from './CompMonHoc.vue';

import { mapGetters } from "vuex";
export default {
    name: "comp-list-da-hoc",
    data() {
        return {

        }
    },
    // props: {
    //     ListMonHoc: {
    //         type: Array,
    //         default: []
    //     }
    // },
    components: {
        CompMonHoc
    },
    computed:{
        ...mapGetters(["allMonHoc"])
    }
    // methods: {
    //     xoaMonHoc(data){
    //         console.log('đây là đã học',data.id);
    //         this.$emit('AppXoaMonHoc',data);
    //     }
    // }
}
</script>

<style>

</style>