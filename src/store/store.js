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
        },
        slMonHoc: state => {
            return state.sl;
        },
        monhocmoi: state => {
            return state.monhocmoi;
        }
    },
    mutations: {
        add_mon_hoc(state, monhoc) {
            state.ListMonHoc.push(monhoc);
            // this.dem_mon_hoc();
        },
        delete_mon_hoc(state, indexmonhoc) {
            state.ListMonHoc.splice(indexmonhoc, 1);
        },
        doi_trang_thai(state, indexmonhoc) {
            state.ListMonHoc[indexmonhoc].trangthai = !state.ListMonHoc[indexmonhoc].trangthai;
        },
        dem_mon_hoc(state) {
            var slp = 0;
            for (var i = 0; i < state.ListMonHoc.length; i++) {
                if (!state.ListMonHoc[i].trangthai) {
                    slp = slp + 1;
                }
            }
            state.sl = slp;
            // return state.sl;
        },
        all_mon_hoc(state) {
            for (var i = 0; i < state.ListMonHoc.length; i++) {
                if(state.ListMonHoc[i].trangthai === false){
                    state.ListMonHoc[i].trangthai = true;
                }
            }
            console.log("all Môn Học");
        },
        them_mon_hoc(state, value){
            state.monhocmoi = value;
        }
    },
    actions: {
        addMonHoc({ commit }, monhoc) {
            commit("add_mon_hoc", monhoc);

        },
        deleteMonHoc({ commit }, indexmonhoc) {
            commit("delete_mon_hoc", indexmonhoc);
        },
        doiTrangThai({ commit }, indexmonhoc) {
            commit("doi_trang_thai", indexmonhoc);
        },
        demMonHoc({ commit }) {
            commit("dem_mon_hoc");
        },
        CompleteMonHoc({ commit }){
            commit("all_mon_hoc");
        },
        ThemMonHoc({ commit }, value){
            commit("them_mon_hoc", value);
        }
    },
    modules: {

    }
});