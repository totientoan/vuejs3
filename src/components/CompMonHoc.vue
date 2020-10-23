<template>
<div class="row">
  <div class="mon-hoc col" style="width:100%">
	<link rel="stylesheet" type="text/css" href="public/css/bootstrap.css">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
    <!-- chưa học -->
    <li class="ui-state-default" v-if="!MonHoc.trangthai" v-on:click="handleChuaHoc">
      <div class="checkbox">
        <label>
          <input type="checkbox" value="" v-on:click="handleChuaHoc"/>
          {{ MonHoc.monhoc }}
    
        </label>
      </div>
    </li>

    <!-- đã học -->
    <li class="ui-state-default" id="done-items li" v-if="MonHoc.trangthai" v-on:click="handleXoa">
          {{ MonHoc.monhoc }}
          <!-- <a href="">{{ MonHoc.monhoc }}</a> -->
        <button class="remove-item btn btn-default btn-xs pull-right">
        <span class="glyphicon glyphicon-remove"> </span>
      </button>
    </li>

    <!-- <h3>{{ MonHoc.monhoc }}</h3>
        <button v-if="!MonHoc.trangthai"
            v-on:click="handleDaHoc"
            class="DaHoc">Đã học
        </button>
        <button v-if="MonHoc.trangthai"
            v-on:click="handleChuaHoc"
            class="ChuaHoc">Chưa học
        </button> -->
  </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import { mapGetters } from "vuex";

export default {
  name: "comp-monhoc",
  slmon: 0,
  data() {
    return {};
  },
  props: {
    MonHoc: {
      type: Object,
      default: null
    }
  },
  computed:{
      ...mapGetters(["allMonHoc", "slMonHoc"])
  },
  methods: {
    ...mapActions(["deleteMonHoc", "doiTrangThai", "demMonHoc"]),
    handleXoa(data){
      var indexMonHoc = -1;
      this.allMonHoc.forEach((u, index) => {
          if(u.id === this.MonHoc.id){
            indexMonHoc = index;
             console.log("đây là App(xoa)")
          }
      });
      if(indexMonHoc != -1){
        this.deleteMonHoc(indexMonHoc);
        // this.ListMonHoc.splice(indexMonHoc, 1);
      }
    },
    handleChuaHoc(data){
        var indexMonHoc = -1;
        this.allMonHoc.forEach((u, index) => {
          if(u.id === this.MonHoc.id){
            indexMonHoc = index;
            console.log(indexMonHoc);
          }
        });
        if(indexMonHoc != -1){
          this.doiTrangThai(indexMonHoc);
          this.demMonHoc();
        }
    }
  },
  
  // methods: {
  //   handleXoa(data) {
  //     var data = {
  //       id: this.MonHoc.id
  //     };
  //     console.log("đã ấn");
  //     this.$emit("xoaMonHoc", data);
  //   },
  //   handleChuaHoc(data) {
  //     var data = {
  //       id: this.MonHoc.id
  //     };
  //     console.log("đã ấn");
  //     this.$emit("suaMonHoc", data);
  //   }
  // }
};
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
#done-items li {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    text-decoration: line-through;
}
.table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
.th,
td {
  padding: 15px;
}
.th {
  text-align: left;
}
</style>