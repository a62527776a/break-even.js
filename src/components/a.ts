import { isMemberExpression } from "@vue/compiler-core";
import { Ref, ref } from "vue";

export interface WeightItem {
    id: any;
    weight: number;
    weightRegion: number[];
    transferWeight: number;
    weightScale: number;
    background: string;
}

export class A {
    weightItems: Ref<WeightItem[]> = ref([]);

    price: number = 0;
    maxPrice: number = 0;

    totalWeight: number = 0;

    totalTransferWeight: number = 0;

    constructor(weightItems: WeightItem[], maxPrice: number) {
        this.initWeightItem(weightItems);
        this.maxPrice = maxPrice;
    }

    public get priceMatrix(): number[] {
        const scale = this.price / this.maxPrice;
        return [0 - scale, 1 + scale];
    }

    public get trasferWeightItems(): WeightItem[] {
        const copyWith: WeightItem[] = JSON.parse(
            JSON.stringify(this.weightItems.value)
        );
        this.totalTransferWeight = 0;
        copyWith.forEach((item) => {
            item.transferWeight =
                item.weightRegion[0] * this.priceMatrix[0] +
                item.weightRegion[1] * this.priceMatrix[1];
        });
        for (let i = copyWith.length - 1; i >= 0; i--) {
            if (i != 0) {
                copyWith[i].transferWeight =
                    copyWith[i].transferWeight - copyWith[i - 1].transferWeight;
            }
            this.totalTransferWeight += copyWith[i].transferWeight;
        }
        return copyWith;
    }

    initWeightItem(weightItems: WeightItem[]) {
        weightItems.sort((a, b) => {
            return b.weight - a.weight;
        });
        for (let i = 0; i < weightItems.length; i++) {
            this.totalWeight += weightItems[i].weight;
            let weightRegionStart = 0
            let weightRegionEnd = 0
            if (i == 0) {
                weightRegionStart = 0
                weightRegionEnd = weightItems[i].weight
            } else {
                weightRegionStart = weightItems[i - 1].weightRegion[1]
                weightRegionEnd = weightItems[i - 1].weightRegion[1] + weightItems[i].weight
            }
            weightItems[i].weightRegion = [weightRegionStart, weightRegionEnd]
        }
        this.weightItems.value = weightItems;
        console.log(this.weightItems)
    }
}
