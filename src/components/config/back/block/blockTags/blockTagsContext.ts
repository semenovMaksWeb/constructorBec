export type TagEmitDelete = (name: string, index: number) => void;
export type TagEmitPush = (name: string, val: string) => void;

export type BlockTagEmit = TagEmitDelete & TagEmitPush

export interface BlockTagContext {
    emit: BlockTagEmit
}
