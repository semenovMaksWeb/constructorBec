import { manualCommandIfsTypeList } from "../../../../../command/manual/ManualCommandIfsType";
import {Ref, ref, computed} from "vue";
import {ModelSelect} from "../../../../../libs/ModelSelect";
import {ButtonAddConfigBackIfsProps} from "./buttonAddConfigBackIfsProps";

export function buttonAddConfigBackIfs(props:ButtonAddConfigBackIfsProps){
    const valueType: Ref<ModelSelect> = ref({id: null, value: null} );

    const valueTypeSave = (modelSelect:ModelSelect) => {
        valueType.value = modelSelect;
    }

    const disableButton = computed(()=>{
        return valueType.value.id === null;
    })

    const clickButtonAddConfigBackIfs = () =>{
        props.modelCommand.addIfs(valueType.value.value);
        valueType.value = { id: null, value: null };
    }

    return {
        manualCommandIfsTypeList,

        valueType,
        valueTypeSave,

        disableButton,
        clickButtonAddConfigBackIfs
    }
}
