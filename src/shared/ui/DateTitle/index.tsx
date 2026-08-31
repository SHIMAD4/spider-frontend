import styles from './index.module.scss'

export const DateTitle = () => {
    const today = new Date().toLocaleDateString('ru-RU')

    return <p className={styles.title}>{today}</p>
}
