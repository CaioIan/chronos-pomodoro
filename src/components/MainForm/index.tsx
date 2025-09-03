import { PlayCircleIcon } from "lucide-react"
import { Container } from "../Container"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"

export function MainForm() {
  return (
    <Container>
          <form className='form' action="">
            <div className='formRow'>
              <DefaultInput labelText='task' id='meuInput' type='text' placeholder='Ex: estudar pra prova'/>
            </div>

            <div className='formRow'>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='formRow'>
              <Cycles />
            </div>

            <DefaultButton icon={<PlayCircleIcon />} />
          </form>
        </Container>
  )
}