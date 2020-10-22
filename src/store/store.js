import Vue from 'vue'
// import { delete } from 'vue/types/umd';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        monhocmoi: "",
        sl: 0,
        msg: 'Welcome to Your Vue.js App',
        ListMonHoc: [
            {
                id: 1,
                monhoc: "môn toán",
                trangthai: false
            }, {
                id: 2,
                monhoc: "môn lí",
                trangthai: true
            }, {
                id: 3,
                monhoc: "môn hóa",
                trangthai: false
            }, {
                id: 4,
                monhoc: "môn văn",
                trangthai: true
            }, {
                id: 5,
                monhoc: "môn sinh",
                trangthai: false
            }, {
                id: 6,
                monhoc: "môn sử",
                trangthai: true
            }, {
                id: 7,
                monhoc: "môn địa",
                trangthai: false
            }, {
                id: 8,
                monhoc: "môn tiếng Nhật",
                trangthai: true
            }, {
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
    },
    getters: {
        allMonHoc: state => {
            return state.ListMonHoc;
        }
    },
    mutations: {
        add_mon_hoc(state, monhoc) {
            state.ListMonHoc.push(monhoc);
        },
        delete_mon_hoc(state, indexmonhoc){
            state.ListMonHoc.splice(indexmonhoc,1);
        },
        doi_trang_thai(state, indexmonhoc){
            state.ListMonHoc[indexmonhoc].trangthai = !state.ListMonHoc[indexmonhoc].trangthai;
        }
    },
    actions: {
        addMonHoc({ commit }, monhoc) {
            commit("add_mon_hoc", monhoc);

        },
        deleteMonHoc({ commit }, indexmonhoc){
            commit("delete_mon_hoc", indexmonhoc);
        }
    },
    modules: {

    }
});