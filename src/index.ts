
interface RandomMap {
    successCount: number
    totalCount: number
    initSeed: number
}


export class PRDRamdom {
    constructor (randomMap: RandomMap) {
        this._totalCount = randomMap.totalCount
        this._successCount = randomMap.successCount
        if (randomMap.initSeed != undefined) {
            this.initSeed = randomMap.initSeed
        }
    }

    // 概率叠加种子
    private _seed = 0
    private _totalCount = 0
    private _successCount = 0

    // 重置概率叠加种子
    public set initSeed(v : number) {
        this._seed = v;
    }
    
    
    public get seed() : number {
        return this._seed
    }
    

    // 减少成功的数量
    private _subSuccessCount() {
        this._successCount -= 1;
        this.calcSeed(true)
    }

    // 减少总数量
    private _subTotalCount() {
        this._totalCount -= 1;
        this.calcSeed(false)
    }

    // 成功率
    public get successScale() : number {
        return this.randomMapScale.successCount
    }

    // 干预后成功率
    public get interveneSuccessScale() : number {
        return this.randomMapScale.successCount + this._seed
    }
    

    // 计算最新的干预概率
    private calcSeed (success: boolean) {
        // 成功概率
        let scale = (this.successCount / this.totalCount) * 100
        // 如果本次成功 那么下次预期成功概率为 种子干预值 - 成功概率
        if (success) {
            this._seed -= (100 - scale)
        // 如果本次失败 那么下次预期成功概率为 种子干预值 + 成功概率
        } else {
            this._seed += scale
        }
    }

    // 概率
    public get randomMapScale() : RandomMap {
        let _sucCount = (this.successCount / this.totalCount) * 100
        if (_sucCount < 0) _sucCount = 0

        let _totCount = 100
        if (_totCount < _sucCount) {
            _totCount = _sucCount
        }

        return {
            successCount: _sucCount,
            totalCount: _totCount
        }
    }

    // 总量
    public get totalCount(): number {
        return this._totalCount
    }

    // 成功量
    public get successCount() : number {
        return this._successCount
    }
    
    // 是否成功
    private _bingo (number: number): boolean {
        if (number > 0 && number <= (this.randomMapScale.successCount + this._seed)) {
            return true
        }
        return false
    }

    // 获取一个经过概率叠加种子干预过的随机数
    get () :boolean {
        if (this.totalCount == 0) return false

        const randomNumber = Math.floor(Math.random() * 100)
        // 是否运算成功
        const isSuccess = this._bingo(randomNumber)

        // 成功了
        if (isSuccess) {
            this._subSuccessCount()
        // 失败了
        } else {
            this._subTotalCount()
        }

        return isSuccess
    }
}