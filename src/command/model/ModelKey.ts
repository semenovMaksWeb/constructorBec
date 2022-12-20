export class ModelKey {
    private _key: string;
    get key(){
        return this._key;
    }
    set key(key: string){
        this._key = key;
    }
}