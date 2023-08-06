import { useState } from "react"

export const useForm = (fields = {}) => {

    const [formState, setFormState] = useState(fields);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(fields);
    }

    return { ...formState, formState, onInputChange, onResetForm }

}