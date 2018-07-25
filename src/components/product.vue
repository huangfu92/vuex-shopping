<template>
  <div class="product">
    <h4>购物车信息</h4>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stat,index) in shopping_list" :key="index">
          <td>{{ stat.id }}</td>
          <td>{{ stat.name }}</td>
          <td>{{ stat.price }}</td>
          <td>
            <div  class="btn btn-info" @click="addToCart(stat)">购物车</div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- {{added}} -->
  </div>
</template>

<style>
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "product",
  data() {
    return {
      shopping_list: this.$store.state.shop_list,
      shopping_add: "" //this.$store.state.added
    };
  },
  methods: {
    ...mapActions(["addToCart"])
  },
  actions: {
    addToCart({ commit }, product) {
      commit("added", product);
    }
  }
};
</script>
