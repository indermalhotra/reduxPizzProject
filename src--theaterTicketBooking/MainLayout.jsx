import styles from "./MainLayout.module.css";

function MainLayout({children}) {
    return (
        <main className={styles.mainContainer}>
            {children}
        </main>
    )
}

export default MainLayout
