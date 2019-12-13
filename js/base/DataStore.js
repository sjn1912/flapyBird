

export class DataStore{
    constructor() {
        this.map = new Map();
    }

    /**
     * 
     * 
     */
    static getInstance(){
        if(!DataStore.instance){
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    put(key,val){
        this.map.set(key,val);
        return this;//方便链式调用
    }
    get(key){
        return this.map.get(key);
    }

    destroy(){
        for(let val of this.map.values()){
            val = null;
        }
    }
}