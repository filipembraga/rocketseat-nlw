import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'


//Componente Header
export function Header(){
    //const currentDate = new Date().toLocaleDateString() - Usando forma nativa
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />
            <p>O melhor para você ouvir sempre!!!</p>
            <span>{currentDate}</span>


        </header>

    )
}