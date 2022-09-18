<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'

interface WeightItem {
    id: any
    weight: number,
    weightRegion: number[]
    transferWeight: number
    weightScale: number
    background: string
}


class B {
    weightItems: WeightItem[] = []

    price: number = 0
    maxPrice: number = 0

    totalWeight: number = 0;
    
    totalTransferWeight: number = 0

    constructor(weightItems: WeightItem[], maxPrice: number) {
        this.initWeightItem(weightItems)
        this.maxPrice = maxPrice
    }

    
    public set setPrice(price : number) {
        this.price = price;
    }

    
    public get priceMatrix() : number[] {
        let scale = this.price / this.maxPrice
        return [
          0 - scale,
          1 + scale
        ]
    }
    
    
    public get trasferWeightItems() : WeightItem[] {
        let copyWith: WeightItem[] = JSON.parse(JSON.stringify(this.weightItems));
        this.totalTransferWeight = 0
        copyWith.forEach((item) => {
          if (item.weightRegion[0] && item.weightRegion[1]) {
            item.transferWeight = item.weightRegion[0] * this.priceMatrix[0] + item.weightRegion[1] * this.priceMatrix[1]
          }
        })
        for (let i = copyWith.length - 1; i >= 0; i--) {
          if (i != 0) {
            copyWith[i].transferWeight = copyWith[i].transferWeight - copyWith[i - 1].transferWeight
          }
          this.totalTransferWeight += copyWith[i].transferWeight
        }
        return copyWith
    }
    
    initWeightItem(weightItems: WeightItem[]) {
        weightItems = weightItems.sort((a, b) => {
            return  b.weight - a.weight
        })
        let lastWeight = 0
        weightItems.every((a) => {
          this.totalWeight = a.weight
        })
        for (let i = 0; i < weightItems.length; i++) {
            weightItems[i].weightRegion = [lastWeight, weightItems[i].weight + lastWeight]
            lastWeight = weightItems[i].weight + lastWeight
        }

        this.weightItems = weightItems
    }
}

let price = ref(0)

let GoodsWeights: WeightItem[] = [
  {
    id: 1,
    weight: 1,
    background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    weightScale: 0,
    weightRegion: [0, 0],
    transferWeight: 0
  },
  {
    id: 2,
    weight: 9,
    background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    weightScale: 0,
    weightRegion: [0, 0],
    transferWeight: 0
  },
  {
    id: 3,
    weight: 30,
    background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    weightScale: 0,
    weightRegion: [0, 0],
    transferWeight: 0
  },
  {
    id: 4,
    weight: 60,
    background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    weightScale: 0,
    weightRegion: [0, 0],
    transferWeight: 0
  }
]

const prdRandom = reactive(new B(GoodsWeights, 2000))

watchEffect(() => {
  prdRandom.setPrice = price.value
})



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
