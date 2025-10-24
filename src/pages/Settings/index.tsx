import { SettingsForm } from "../../components/SettingsForm";
import { MainTemplate } from "../../templates/MainTemplate";
import { useEffect} from 'react';

export function Settings() {

    useEffect(() => {
    document.title = 'Configurações - Tempus Pomodoro';
  }, []);

    return (
        <MainTemplate>
            <SettingsForm />
        </MainTemplate>
    )
}