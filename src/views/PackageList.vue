<template>
  <a-list itemLayout="horizontal" :dataSource="PackageList">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta>
        <a slot="title">{{item.username}}</a>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
export default {
  data: function() {
    return {
      PackageList: []
    };
  },
  created: function() {
    PackageList = this.$store.state.getters.getList;
  },
  computed: function() {}
};
</script>
<style>
</style>