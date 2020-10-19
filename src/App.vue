<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <table>
      <tr>
      <th>cần học</th>
      <th>đã học</th>
      </tr>
      <tr>
        <td>
          <comp-list v-bind:ListMonHoc="ListMonHoc" v-on:AppsuaMonHoc = "AppsuaMonHoc"/>
        </td>
        <td>
          <comp-list-da-hoc v-bind:ListMonHoc="ListMonHoc" v-on:AppsuaMonHoc = "AppsuaMonHoc"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import CompListDaHoc from './components/CompListDaHoc.vue'
import CompList from './components/CompList.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ListMonHoc: [
        {
          id: 1,
          monhoc: "môn toán",
          trangthai: false
        },{
          id: 2,
          monhoc: "môn lí",
          trangthai: true
        },{
          id: 3,
          monhoc: "môn hóa",
          trangthai: false
        },{
          id: 4,
          monhoc: "môn văn",
          trangthai: true
        },{
          id: 6,
          monhoc: "môn sinh",
          trangthai: false
        },{
          id: 7,
          monhoc: "môn sử",
          trangthai: true
        },{
          id: 8,
          monhoc: "môn địa",
          trangthai: false
        },{
          id: 9,
          monhoc: "môn tiếng Nhật",
          trangthai: true
        },{
          id: 10,
          monhoc: "môn tiếng Anh",
          trangthai: false
        },
        {
          id: 11,
          monhoc: "môn tiếng Hàn",
          trangthai: true
        },
      ]
    }
  },
  components: {
    CompList,
    CompListDaHoc
  },
  methods: {
    AppsuaMonHoc(data){
      var indexMonHoc = -1;
      this.ListMonHoc.forEach((u, index) => {
          if(u.id === data.id){
            indexMonHoc = index;
             console.log("đây là App")
          }
      });
      if(indexMonHoc != -1){
        this.ListMonHoc[indexMonHoc].trangthai = !this.ListMonHoc[indexMonHoc].trangthai;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
