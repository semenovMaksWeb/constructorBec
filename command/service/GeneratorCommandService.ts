// import { ModelCommand } from "../model/ModelCommand";
// import { ManualCommandType } from "../manual/ManualCommandType";
// import {ManualCommandRilesType} from "../manual/ManualCommandRilesType";
// import {ManualCommandTypeVar} from "../manual/ManualCommandTypeVar";
// import {ManualCommandIfsType} from "../manual/ManualCommandIfsType";
// import {ManualCommandSqlConvertType} from "../manual/ManualCommandSqlConvertType";
//
// export class GeneratorCommandService {
//     private command: ModelCommand[] = [];
//
//     private addValidate(index: number){
//         this.command[index]?.validate?.push( { key: "", riles: [] } );
//         this.addValidateRules(index, this.command[index]?.validate?.length as number - 1);
//     }
//
//     private generatorStructure (type: string, index: number){
//         switch (type){
//             case ManualCommandType.validate: {
//                 this.command[index].validate = [];
//                 this.addValidate(index);
//                 break;
//             }
//             case ManualCommandType.postgresql: {
//                 this.command[index].sql = {
//                     convert: ManualCommandSqlConvertType.Array,
//                     text: "",
//                     data: []
//                 };
//                 break;
//             }
//         }
//     }
//
//     private generatorRilesParams(indexCommand: number, indexValidate: number, indexRules: number, type: string){
//         switch (type){
//             case ManualCommandRilesType.var: {
//                 this.command[indexCommand].validate[indexValidate].riles[indexRules].params = {type: ManualCommandTypeVar.String};
//                 break;
//             }
//             case ManualCommandRilesType.req:{
//                 this.command[indexCommand].validate[indexValidate].riles[indexRules].params = null;
//                 break;
//             }
//         }
//     }
//
//     private createIfs(indexCommand: number){
//         if (!this.command[indexCommand].ifs){
//             this.command[indexCommand].ifs = [];
//         }
//     }
//
//     private addIfsData(indexCommand: number, key: string){
//         this.createIfs(indexCommand);
//         this.command[indexCommand].ifs.push( { [key]: { key: [] } } );
//     }
//
//     /** TODO Обход метод в идеале отказаться от него */
//     public updateLink(link:any, key:string, value:any){
//         link[key] = value;
//     }
//
//     public getCommand(){
//         return this.command;
//     }
//
//     /**
//      * Command корень
//      * */
//     public addCommand(){
//          this.command.push({key: "", type: ManualCommandType.null });
//     }
//
//     public deleteCommand(index: number){
//         this.command.splice(index, 1);
//     }
//
//     public updateKeyCommand(index:number, key:string){
//         this.command[index].key = key;
//     }
//
//     /**
//      * Command Validate
//      * */
//     public deleteValidate(indexCommand: number, indexValidate: number){
//         this.command[indexCommand]?.validate?.splice(indexValidate, 1);
//     }
//
//     public updateValidateKey(indexCommand: number, indexValidate: number, key: string){
//         this.command[indexCommand].validate[indexValidate].key = key;
//     }
//
//     /**
//      * Command ValidateRiles
//      * */
//     public addValidateRules(indexCommand: number, indexValidate: number){
//         this.command[indexCommand]?.validate?.[indexValidate]?.riles.push( { type: "", params: {}, error: "" } );
//     }
//
//     public deleteValidateRules(indexCommand: number, indexValidate: number, indexRules: number){
//         this.command[indexCommand]?.validate?.[indexValidate]?.riles.splice(indexRules, 1);
//     }
//
//     public updateValidateRulesType(indexCommand: number, indexValidate: number, indexRules: number, type: string){
//         this.command[indexCommand].validate[indexValidate].riles[indexRules].type = type;
//         this.generatorRilesParams(indexCommand, indexValidate, indexRules,type);
//     }
//
//     public updateValidateRulesError(indexCommand: number, indexValidate: number, indexRules: number, error: string){
//         this.command[indexCommand].validate[indexValidate].riles[indexRules].error = error;
//     }
//
//     public updateValidateRulesParamsKey(indexCommand: number, indexValidate: number, indexRules: number, key: string, value:any){
//         this.command[indexCommand].validate[indexValidate].riles[indexRules].params[key] = value;
//     }
//
//     /**
//      * CommandType
//      * */
//     public updateType(type: string, index: number){
//          this.command[index] = {
//              key: this.command[index].key,
//              type: type
//          };
//         this.generatorStructure(type, index);
//     }
//
//     /**
//      * Command ifs
//      * */
//     public addIfsParams(indexCommand: number){
//         this.addIfsData(indexCommand, ManualCommandIfsType.params)
//     }
//
//     public  addIfsDataset(indexCommand: number){
//         this.addIfsData(indexCommand, ManualCommandIfsType.dataset)
//     }
//
//     public addIfsValue(indexCommand: number){
//         this.createIfs(indexCommand);
//         this.command[indexCommand].ifs.push( { value: null } );
//     }
//
//     public addIfsOperator(indexCommand: number){
//         this.createIfs(indexCommand);
//         this.command[indexCommand].ifs.push( { operator: null} );
//     }
//
//     public deleteIfs(indexCommand: number, indexIfs:number){
//         this.command[indexCommand].ifs.splice(indexIfs, 1);
//     }
//
//     public updateIfsValue(indexCommand: number, indexIfs:number, value:any){
//         this.command[indexCommand].ifs[indexIfs].value = value;
//     }
//
//     public updateIfsOperator(indexCommand: number, indexIfs:number, operator:any){
//         this.command[indexCommand].ifs[indexIfs].operator = operator;
//     }
//
//     public addIfsDatasetKey(indexCommand: number, indexIfs:number){
//         this.command[indexCommand].ifs[indexIfs].dataset.key.push(null);
//     }
//
//     public addIfsParamsKey(indexCommand: number, indexIfs:number){
//         this.command[indexCommand].ifs[indexIfs].params.key.push(null);
//     }
//
//     public updateIfsDatasetKey(indexCommand: number,indexIfs: number, indexKey: number, key:string){
//         this.command[indexCommand].ifs[indexIfs].dataset.key[indexKey] = key;
//     }
//
//     public updateIfsDataParamsKey(indexCommand: number,indexIfs: number, indexKey: number, key:string){
//         this.command[indexCommand].ifs[indexIfs].params.key[indexKey] = key;
//     }
//
//     public deleteIfsDatasetKey(indexCommand: number,indexIfs: number, indexKey: number){
//         this.command[indexCommand].ifs[indexIfs].dataset.key.splice(indexKey, 1);
//     }
//
//     public deleteIfsDataParamsKey(indexCommand: number,indexIfs: number, indexKey: number){
//         this.command[indexCommand].ifs[indexIfs].params.key.splice(indexKey, 1);
//     }
//  }