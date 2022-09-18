<template>
  <main>
    whats this?
    <input type="range" v-model="prdRandom.price" :min="-8000" :max="8000" />
    <div>当前盈亏：{{ prdRandom.price }}</div>
    <div>最大盈亏：{{ prdRandom.maxPrice }}</div>
    <div v-for="item in prdRandom.trasferWeightItems" :key="item.id">
      <div>初始权重 {{ item.weight }}</div>
      <div>平衡权重 {{ item.transferWeight }}</div>
      <div>
        平衡权重比例
        {{
          ((item.transferWeight / prdRandom.totalTransferWeight) * 100).toFixed(
            2
          )
        }}%
      </div>
    </div>
    <div>{{ prdRandom.totalTransferWeight }}</div>
    <div class="wqdqwdqw">
      <div
        v-for="item in prdRandom.trasferWeightItems"
        class="gggg"
        :key="item.id"
        :style="`background: ${item.background};width: ${
          (item.transferWeight / prdRandom.totalTransferWeight) * 800
        }px`"
      ></div>
    </div>
  </main>
</template>

<script lang="ts">
import { reactive, ref } from '@vue/reactivity';
import { A, WeightItem } from './a';
export default {
  setup() {
    let price = ref(0);

    let GoodsWeights: WeightItem[] = [
      {
        id: 1,
        weight: 1,
        background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`,
        weightScale: 0,
        weightRegion: [0, 0],
        transferWeight: 0,
      },
      {
        id: 2,
        weight: 9,
        background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`,
        weightScale: 0,
        weightRegion: [0, 0],
        transferWeight: 0,
      },
      {
        id: 3,
        weight: 30,
        background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`,
        weightScale: 0,
        weightRegion: [0, 0],
        transferWeight: 0,
      },
      {
        id: 4,
        weight: 60,
        background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`,
        weightScale: 0,
        weightRegion: [0, 0],
        transferWeight: 0,
      },
    ];

    const prdRandom = reactive(new A(GoodsWeights, 8000));

    return {
      price,
      prdRandom,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  max-width: 60vw;
  margin: 0 auto;
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
