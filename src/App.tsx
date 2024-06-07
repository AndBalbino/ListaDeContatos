import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.css'
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';

function App() {
  return (
   <div>
   <Header/>
   <main className={styles.main}>
   <div>
    <h2>Oque você vai fazer?</h2>
    <Taskform btnText='Criar contato'/>
   </div>
   <div>
    <h2>Seus contatos:</h2>
    <Tasklist/>
   </div>
   </main>
  <Footer/>
   </div>
  );
}

export default App;
