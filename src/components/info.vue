<template>
  <div>
        <div class="item-wrapper">
            <div class='item'>总数：<strong>{{totalNum}}</strong></div>
            <div class='item'>总价：<strong>{{totalPrice}}</strong></div>
            <div @click="clearAllCart()" class="item btn btn-danger">清空购物车</div>
           
        </div>
    </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    //调用store.js中的clearAllCart函数
    ...mapActions(["clearAllCart"])
  },
  computed: {
    //store.js中的otalPrice、totalNum函数
    ...mapGetters(["totalPrice", "totalNum"])
  }
};
</script>

<style scoped>
.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
}
</style>
