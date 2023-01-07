import { ModelSelect } from "../../../../../libs/ModelSelect";

export type BlockSelectEmit = (name:string, val: ModelSelect) => void;

export interface BlockSelectContext {
    emit: BlockSelectEmit
}
