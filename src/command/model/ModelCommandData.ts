export class ModelCommandData{
    private _key: string[] = [];

    get key(){
        return this._key;
    }

    public addKey(val:string = null){
        this._key.push(val);
    }

    public deleteKey(index:number){
        this._key.splice(index, 1);
    }

    public updateKey(index: number, value:string){
        this._key[index] = value;
    }
}