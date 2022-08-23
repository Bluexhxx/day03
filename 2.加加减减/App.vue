<template>
  <div>
    <button @click="addClick">添加li</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <span>{{ item }} </span>
        <button @click="delClick(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    addClick() {
      let num = Math.floor(Math.random() * 20);
      this.arr.push(num)
    },
    delClick(index) {
      this.arr.splice(index, 1)
    },
  },
};
</script>

<style></style>
