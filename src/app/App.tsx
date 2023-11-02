import {FC} from 'react'
import { Outlet } from "react-router-dom"
import styles from './App.module.scss';
import Header from '../widgets/Header/Header';
import Footer from '../shared/ui/Footer/Footer';
import ValidAuth from "../hok/ValidAuth";

const App: FC = () => {


  return (
  <ValidAuth>
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
    <Footer />
  </ValidAuth>

  )
}

export default App;
