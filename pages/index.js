import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@Giridhar - Talla Giridhar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <p className={styles.hello}><b>Hello world! </b>👋</p>
        <h1 className={styles.title}>
          I'm <span>Giridhar Talla</span> 
				</h1>
      </main>
    </div>
  )
}