<template>
  <div id="app">
	<link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="todolist not-done">
            <h1>Todos</h1>
            <input type="text" class="form-control add-todo" placeholder="Add todo" v-model="monhocmoi" id="MonHocMoi" @keyup.enter="AddList">
            {{ monhocmoi }}
            <button id="checkAll" class="btn btn-success" v-on:click="allMonHoc">Mark all as done</button>
            <!-- <button id="all" class="btn btn-success" v-on:click="DemMonHoc">{{ sl }}</button> -->
            <hr>
            <ul id="sortable" class="list-unstyled ui-sortable">
              <comp-list v-bind:ListMonHoc="ListMonHoc" v-on:AppsuaMonHoc = "AppsuaMonHoc"/>
            
            </ul>
            <div class="todo-footer">
              <strong><span class="count-todos">{{ sl }}</span></strong> Items Left
            </div>
          </div>
        </div>
        <div class="col-md-6">
            <div class="todolist">
             <h1>Already Done</h1>
                <ul id="done-items" class="list-unstyled ui-sortable">
                  <comp-list-da-hoc v-bind:ListMonHoc="ListMonHoc" v-on:AppXoaMonHoc = "AppXoaMonHoc"/>
                </ul>
            </div>
        </div>
        <!-- <table>
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
        </table> -->
      </div>
    </div>
  </div>
</template>

<script>
import CompListDaHoc from './components/CompListDaHoc.vue'
import CompList from './components/CompList.vue';
export default {
  name: 'app',
  data () {
    return {
      monhocmoi: "",
      sl: 0,
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
          id: 5,
          monhoc: "môn sinh",
          trangthai: false
        },{
          id: 6,
          monhoc: "môn sử",
          trangthai: true
        },{
          id: 7,
          monhoc: "môn địa",
          trangthai: false
        },{
          id: 8,
          monhoc: "môn tiếng Nhật",
          trangthai: true
        },{
          id: 9,
          monhoc: "môn tiếng Anh",
          trangthai: false
        },
        {
          id: 10,
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
    DemMonHoc(data){
      var slp = 0;
      for (var i = 0; i < this.ListMonHoc.length; i++){
        if(!this.ListMonHoc[i].trangthai){
          slp = slp + 1;
        }
      }
      this.sl = slp;
    },
    AddList(data){
      if(this.monhocmoi != ""){
        console.log(this.ListMonHoc.length)
        this.ListMonHoc.push({
          id: this.ListMonHoc.length + 1,
          monhoc: this.monhocmoi,
          trangthai: false
        });
      }
    },
    allMonHoc(data){
      this.ListMonHoc.forEach((u,index) => {
        if(!u.trangthai){
          u.trangthai = true;
        }
      });
    },
    AppXoaMonHoc(data){
      var indexMonHoc = -1;
      this.ListMonHoc.forEach((u, index) => {
          if(u.id === data.id){
            indexMonHoc = index;
             console.log("đây là App(xoa)")
          }
      });
      if(indexMonHoc != -1){
        this.ListMonHoc.splice(indexMonHoc, 1);
      }
    },
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
      console.log(this.sl);
      //
      var slp = 0;
      for (var i = 0; i < this.ListMonHoc.length; i++){
        if(!this.ListMonHoc[i].trangthai){
          slp = slp + 1;
        }
      }
      this.sl = slp;
    }
  },
  computed: {
    
  }
}
</script>

<style>
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.todo-footer {
  background-color: #FFFF00;
}
.col-md-6 {
  background-color: #EEEEEEEE;
}
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
