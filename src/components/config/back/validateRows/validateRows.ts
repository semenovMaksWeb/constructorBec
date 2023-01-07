export function validateRows(props:any) {
    const inputKey = (val) => {
        props.validate.key =  val.target.value;
    }

    return {
        inputKey
    }
}