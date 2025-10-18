import { useContext } from "react";
import { showMessage } from "../../adapters/showAlert";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { DefaultInput } from "../DefaultInput"
import styles from "./styles.module.css"
import { TaskContext } from "../../contexts/TaskContext/TaskContext";

export function SettingsForm() {

    const {state, dispatch} = useContext(TaskContext);
    
    function validateNumbers(workTime: number, shortBreakTime: number, longBreakTime: number): boolean {
        // Verifica se os valores são números válidos e positivos
        const values = [workTime, shortBreakTime, longBreakTime];
        
        if (values.some(isNaN)) {
            showMessage.error('Por favor, insira apenas números');
            return false;
        }
        
        if (values.some(value => value <= 0)) {
            showMessage.error('Os valores precisam ser maiores que zero');
            return false;
        }

        // Verifica se há valores decimais
        if (values.some(value => !Number.isInteger(value))) {
            showMessage.error('Por favor, use apenas números inteiros');
            return false;
        }
        
        return true;
    }

    function handleSubmitSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        showMessage.dismiss();

        const formData = new FormData(event.currentTarget);
        
        // Converte e valida os valores
        const values = ['workTime', 'shortBreakTime', 'longBreakTime'].map(
            key => {
                const value = formData.get(key);
                // Rejeita strings vazias ou não numéricas
                if (!value || typeof value !== 'string' || !/^\d+$/.test(value)) {
                    return NaN;
                }
                return Number(value);
            }
        );

        const [workTime, shortBreakTime, longBreakTime] = values;
        
        if (!validateNumbers(workTime, shortBreakTime, longBreakTime)) {
            return;
        }

        dispatch({ 
            type: TaskActionTypes.CHANGE_SETTINGS, 
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime,
            }
        });
        
        showMessage.success('Configurações atualizadas com sucesso!')
    }
    
    return (
        <form onSubmit={handleSubmitSettings} className={styles.settingsFormContainer} action=''>
            <h1>Configurações</h1>
            <p>Modifique as configurações para tempo de foco, descanso curto e descanso longo.</p>
            <DefaultInput 
                id="workTime" 
                name="workTime" 
                labelText="Foco" 
                type="number"
                min={1}
                step={1}
                pattern="\d*"
                inputMode="numeric"
                defaultValue={state.config.workTime}
                required
            />
            <DefaultInput 
                id="shortBreakTime" 
                name="shortBreakTime" 
                labelText="Descanso Curto" 
                type="number"
                min={1}
                step={1}
                pattern="\d*"
                inputMode="numeric"
                defaultValue={state.config.shortBreakTime}
                required
            />
            <DefaultInput 
                id="longBreakTime" 
                name="longBreakTime" 
                labelText="Descanso Longo" 
                type="number"
                min={1}
                step={1}
                pattern="\d*"
                inputMode="numeric"
                defaultValue={state.config.longBreakTime}
                required
            />
            <button type="submit">Salvar</button>
        </form>
        
    )
}
