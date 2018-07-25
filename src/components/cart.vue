<template>
   <div>
        <h4>已选商品</h4>
        <table class="table table-hover table-bordered">
            <thead>
                <tr v-if="added.length" >
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="added.length" v-for="(stat,index) in added" :key="index" >
                    <td>{{stat.id}}</td>
                    <td>{{stat.name}}</td>
                    <td>{{stat.price}}</td>
                    <td>{{stat.num}}</td>
                    <td>
                        <div @click="del(stat)"  class="btn btn-danger btn-sm">删除</div>
                    </td>
                </tr>
                <tr v-if="!added.length">
                    <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
      //添加的商品列表
    added() {
      return this.$store.state.added;
    }
  },
  methods: {
      //调用store.js中的shoplist函数和del函数
    ...mapActions(["shoplist", "del"])
  }
};
</script>
