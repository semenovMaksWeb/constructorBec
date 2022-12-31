export type ConfigBackBlockTagEmitDelete = (name:string, index: number) => void;
export type ConfigBackBlockTagEmitPush = (name:string, val: string) => void;

export type ConfigBackBlockTagEmit = ConfigBackBlockTagEmitDelete & ConfigBackBlockTagEmitPush

export interface ConfigBackBlockTagContext {
    emit: ConfigBackBlockTagEmit
}
