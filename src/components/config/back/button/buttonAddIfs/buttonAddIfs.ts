import { Ref, ref, computed } from "vue";

import { manualCommandIfsTypeList } from "../../../../../command/manual/ManualCommandIfsType";
import { ModelSelect } from "../../../../../libs/ModelSelect";
import { ButtonAddIfsProps } from "./buttonAddIfsProps";

export function buttonAddIfs(props:ButtonAddIfsProps) {
    const valueType: Ref<ModelSelect> = ref({ id: null, value: null });

    const valueTypeSave = (modelSelect:ModelSelect) => {
        valueType.value = modelSelect;
    }

    const disableButton = computed(() => {
        return !valueType?.value?.id;
    })

    const clickButtonAddIfs = () => {
        props.modelCommand.addIfs(valueType.value.value);
        valueType.value = { id: null, value: null };
    }

    return {
        manualCommandIfsTypeList,
        valueType,
        valueTypeSave,
        disableButton,
        clickButtonAddIfs
    }
}
