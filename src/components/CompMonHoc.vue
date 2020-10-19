<template>
    <div class="mon-hoc" style="width:100%">
        <h3>{{ MonHoc.monhoc }}</h3>
        <button v-if="!MonHoc.trangthai"
            v-on:click="handleDaHoc"
            class="DaHoc">Đã học
        </button>
        <button v-if="MonHoc.trangthai"
            v-on:click="handleChuaHoc"
            class="ChuaHoc">Chưa học
        </button>
    </div>
</template>

<script>
export default {
    name: "comp-monhoc",
    data() {
        return {

        }
    },
    props: {
        MonHoc: {
            type: Object,
            default: null
        }
    },
    methods: {
        handleDaHoc(data){
            var data = {
                id: this.MonHoc.id
            }
            console.log('đã ấn');
            this.$emit('suaMonHoc',data);

        },
        handleChuaHoc(data){
            var data = {
                id: this.MonHoc.id
            }
            console.log('đã ấn');
            this.$emit('suaMonHoc',data);
        }
    }
}
</script>

<style>
.table, th, td {
 border: 1px solid black;
 border-collapse: collapse;
 }
 .th, td {
   padding: 15px;
 }
 .th {
 text-align: left;
 }
</style>