import { useRef } from "react";
import { showMessage } from "../../adapters/showAlert";
import { DefaultInput } from "../DefaultInput"
import styles from "./styles.module.css"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { DefaultButton } from "../DefaultButton";
import { SaveIcon } from "lucide-react";

export function SettingsForm() {
    const { state, dispatch } = useTaskContext();

    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    function handleSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para TODOS os campos');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success('Configurações salvas!');
}

    console.log('SALVAR');

    
    return (
        <form onSubmit={handleSubmitSettings} className={styles.settingsFormContainer} action=''>
            <h1>Configurações</h1>
            <p>Modifique as configurações para tempo de foco, descanso curto e descanso longo.</p>
            <DefaultInput 
                id="workTime" 
                name="workTime" 
                labelText="Foco" 
                type="number"
                ref={workTimeInput}
                defaultValue={state.config.workTime}
                required
            />
            <DefaultInput 
                id="shortBreakTime" 
                name="shortBreakTime" 
                labelText="Descanso Curto" 
                type="number"
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                required
            />
            <DefaultInput 
                id="longBreakTime" 
                name="longBreakTime" 
                labelText="Descanso Longo" 
                type="number"
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
                required
            />
            <DefaultButton
                style={{ 
                    padding: '0.5rem 1rem',  // vertical horizontal
                    minWidth: '120px'        // largura mínima
                }}
                icon={<SaveIcon />}
                aria-label='Salvar configurações'
                title='Salvar configurações'
          />
        </form>
        
    )
}

