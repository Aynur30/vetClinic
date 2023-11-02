import { FC } from 'react'
import { useFormContext } from "react-hook-form";
import styles from './Inputs.module.scss'

type RadioButtonInputProps = {
    name: string;
    label: string;
    value: string
}

const RadioButtonInput: FC<RadioButtonInputProps> = ({ name, label, value }) => {

    const { register } = useFormContext()

    return (
        <div className={styles.RadioButtonWrapper}>
            <input className={styles.RadioButtonWrapper__input} value={value} type='radio' id={name} {...register(name)} />
            <label className={styles.RadioButtonWrapper__label} htmlFor={name}>{label}</label>
        </div>
    )
}

export default RadioButtonInput