import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function PomodoroDescript() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
        <Heading>A técnica Pomodoro 🍅 </Heading>

      <p>
        Você já sentiu que começou a estudar ou trabalhar e, quando percebeu, já estava
        cansado, distraído ou enrolando no celular? Pois é, isso acontece com todo mundo.
        É aí que entra a técnica Pomodoro: um jeito simples e poderoso de organizar seu
        tempo e aumentar o foco.
      </p>

      <p>
        A ideia é dividir seu tempo em blocos curtos de concentração (os “pomodoros”) e
        intervalos estratégicos de descanso. Assim, você mantém a mente fresca, evita a
        sobrecarga e consegue produzir muito mais.
      </p>

      <h2>Como funciona na prática:</h2>
      <ul>
        <li>Escolha uma tarefa – algo que você realmente precisa fazer, como estudar uma matéria, escrever um relatório ou arrumar sua mesa.</li>
        <li>Programe o timer para 25 minutos – esse será o seu primeiro pomodoro.</li>
        <li>Trabalhe com foco total – sem celular, sem distrações. Esses 25 minutos são só para aquela tarefa.</li>
        <li>Faça uma pausa curta de 5 minutos – levante, estique o corpo, beba água, respire.</li>
        <li>Repita o ciclo 4 vezes – depois disso, faça uma pausa maior de 15 a 30 minutos para descansar de verdade.</li>
      </ul>

      <p>Simples, né? Mas funciona muito bem, porque você treina seu cérebro a manter o foco em pequenas doses.</p>

      <h2>Exemplos de como usar no dia a dia:</h2>
      <ul>
        <li>📚 Estudos: se você precisa ler 40 páginas de um livro, pode dividir em 2 pomodoros de 25 minutos cada.</li>
        <li>🖊️ Escrever trabalhos: ao invés de tentar escrever um texto inteiro de uma vez, você pode focar em um parágrafo ou uma seção por pomodoro.</li>
        <li>🏠 Organização da casa: arrumar o quarto em 25 minutos, pausa, depois mais 25 minutos para lavar a louça.</li>
        <li>💻 Trabalho no computador: responder e-mails em um pomodoro, depois focar em um relatório no próximo.</li>
      </ul>

      <h2>Por que funciona tão bem?</h2>
      <ul>
        <li>Ajuda a vencer a procrastinação, porque 25 minutos parecem bem menos assustadores do que “horas” de trabalho.</li>
        <li>Melhora o foco e a disciplina, já que você treina o cérebro a se concentrar em blocos curtos.</li>
        <li>Traz equilíbrio entre produtividade e descanso, evitando a fadiga mental.</li>
      </ul>

      <p>
        👉 Em resumo: o Pomodoro é como se fosse um jogo contra o relógio. Você foca intensamente
        por 25 minutos, ganha pontos (ou melhor, resultados 😅) e descansa. Com o tempo, você
        vai perceber que rende muito mais e se sente bem menos cansado no fim do dia.
      </p>
      </GenericHtml>
      </Container>
    </MainTemplate>
  );
}