export interface WeightItem {
    id: any;
    weight: number;
    weightRegion: number[];
    transferWeight: number;
    weightScale: number;
    background: string;
}

export class A {
    weightItems: WeightItem[] = [];

    price: number = 0;
    maxPrice: number = 0;

    totalWeight: number = 0;

    totalTransferWeight: number = 0;

    constructor(weightItems: WeightItem[], maxPrice: number) {
        this.initWeightItem(weightItems);
        this.maxPrice = maxPrice;
        return this
    }

    public get priceMatrix(): number[] {
        const scale = this.price / this.maxPrice;
        return [0 - scale, 1 + scale];
    }

    public get trasferWeightItems(): WeightItem[] {
        const copyWith: WeightItem[] = JSON.parse(
            JSON.stringify(this.weightItems)
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
        weightItems = weightItems.sort((a, b) => {
            return b.weight - a.weight;
        });
        let lastWeight = 0;
        weightItems.every((a) => {
            this.totalWeight = a.weight;
        });
        for (let i = 0; i < weightItems.length; i++) {
            weightItems[i].weightRegion = [
                lastWeight,
                weightItems[i].weight + lastWeight,
            ];
            lastWeight = weightItems[i].weight + lastWeight;
        }

        this.weightItems = weightItems;
    }
}
