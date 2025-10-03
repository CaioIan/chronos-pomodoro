import { Container } from '../../components/Container/index';
import { MainTemplate } from '../../templates/MainTemplate';
import { TrashIcon } from 'lucide-react';
import styles from './styles.module.css'

export function History() {
  return (
      <MainTemplate>
        <Container>
          <div className={styles['history-Header']}>
            <h1>History</h1>
            <span>
              <button type='button' className={styles['history-Header-Button']}><TrashIcon color='white'/></button>
            </span>
          </div>
        </Container>

        <Container>
          <div className='responsiveTable'>asdasdasdas</div>
        </Container>
      </MainTemplate>
  );
}