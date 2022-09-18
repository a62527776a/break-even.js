<script setup lang="ts">


</script>

<template>
  <main>
    whats this?
    <input type="range" v-model="price" :min="-2500" :max="2500">
    <div>当前盈亏：{{price}}</div>
    <div>最大盈亏：{{prdRandom.maxPrice}}</div>
    <div v-for="item in prdRandom.trasferWeightItems" :key="item.id">
      <div>初始权重 {{item.weight}}</div>
      <div>平衡权重 {{item.transferWeight}}</div>
      <div>平衡权重比例 {{((item.transferWeight / prdRandom.totalTransferWeight) * 100).toFixed(2)}}%</div>
    </div>
    <div>{{prdRandom.totalTransferWeight}}</div>
    <div class="wqdqwdqw">
      <div v-for="item in prdRandom.trasferWeightItems" class="gggg" :key="item.id" :style="`background: ${item.background};width: ${(item?.transferWeight / prdRandom.totalTransferWeight) * 800}px`"></div>
    </div>
    <!-- <div @click="get">随机一次</div>
    <div @click="getTen">随机十次</div>
    <div>本次随机结果{{success ? '成功' : '失败'}}</div>
    <div>总量{{prdRandom.totalCount}} 成功量{{prdRandom.successCount}}</div>
    <div>当前成功率{{prdRandom.successScale}}</div>
    <div>干预后成功率{{prdRandom.interveneSuccessScale}}</div>
    <div>当前干预种子{{scale}}</div>
    <div class="content" >
      <div v-for="(item, idx) in successList.value" :key="idx">{{item}}</div>
    </div> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.content {
  height: 200px;
  overflow: scroll;
}
.wqdqwdqw {
  display: flex;
  justify-content: flex-start;
  height: 50px;
}
.gggg {
  height: 50px;
}
</style>
