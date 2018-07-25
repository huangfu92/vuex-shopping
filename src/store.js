import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //商品列表
    shop_list: [{
      id: 11,
      name: '鱼香肉丝',
      price: 12,
    }, {
      id: 22,
      name: '宫保鸡丁',
      price: 14
    }, {
      id: 34,
      name: '土豆丝',
      price: 10
    }, {
      id: 47,
      name: '米饭',
      price: 2
    }],
    //添加到购物车的商品
    added: []
  },
  mutations: {
    //添加商品list
    add(state, product) {
      let record = state.added.find(n => n.id == product.id);

      //console.log(record)
      if (!record) {
        //console.log()
        state.added.push(Object.assign(product, {
          num: 1
        }))
      } else {

        record.num++
        state.added.splice(1, 0)
      }
    },
    //删除指定ID的商品
    delProduct: (state, product) => {
      state.added.forEach((v, k) => {
        if (v.id == product.id) {
          state.added.splice(k, 1)
        }
      })
    }

  },
  actions: {
    addToCart({ commit }, product) {
      commit('add', product)
    },
    shoplist({ commit }, product) {
      commit('list', product)
    },
    clearAllCart() {
      console.log("删除")
      this.state.added.splice(0)
    },
    del({ commit }, product) {
      commit('delProduct', product)
    }

  },

  getters: {
    shoplist: state => state.shop_list,
    //计算价格
    totalPrice: (state, getters) => {

      let Price = 0;
      state.added.forEach(function (v, k) {
        Price += v.price * v.num
      });
      return Price;
    },
    //计算商品个数
    totalNum: (state, getters) => {
      let Price = 0;
      state.added.forEach(function (v, k) {
        Price += v.num
      });
      return Price;
    }
  }
})

