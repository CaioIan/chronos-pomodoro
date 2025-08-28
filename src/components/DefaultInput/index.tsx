import styles from './DeafultInput.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({id, labelText, type, ...rest}: DefaultInputProps) {
  return (
    <>
    <div className={styles.inputContainer}>
      <label className={styles.labelText} htmlFor={id}>{labelText}</label>
    <input className={styles.input} type={type} id={id} {...rest} />
    </div>
    </>
  );
}
