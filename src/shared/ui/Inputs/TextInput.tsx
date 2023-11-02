import { FC } from 'react'
import { useForm } from "react-hook-form";
import styles from './Inputs.module.scss'


type TextInputProps = {
    name: string;
    label: string;
    placeholder?: string;
}

const TextInput: FC<TextInputProps> = ({ name, label, placeholder = '' }) => {

    const { register } = useForm()
    if (!register) {
        return null; 
    }

    return (
        <div className={styles.wrapper}>
            <label className={styles.wrapper__label} htmlFor={name}>{label}</label>
            <input className={styles.wrapper__input} placeholder={placeholder} type='text' id={name} {...register(name)} />
        </div>
    )
}

export default TextInput






