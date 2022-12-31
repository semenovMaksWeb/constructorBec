import { ModelSelect } from "../../../../../libs/ModelSelect";

export type ConfigBackBlockSelectEmit = (name:string, val: ModelSelect) => void;

export interface ConfigBackBlockSelectContext {
    emit: ConfigBackBlockSelectEmit
}
