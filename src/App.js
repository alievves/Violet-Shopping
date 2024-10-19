import React, { useEffect, useState } from 'react'
import styles from "./App.module.css"
import Routes from "./Routes"
import { useRoutes } from 'react-router-dom'

export default function App() {

  let router = useRoutes(Routes)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>
      {router}
      {loading ? (
        <div className={styles.backGround}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <div className={styles.content}>
        </div>
      )}
    </div>
  )
}