import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import styles from './Main.module.scss';

function App() {
  return (
    <div className={styles.base}>
      <Pane 
        width="100%" 
        height="100vh"
        background="blue"
        padding={0}
        margin={0}
      >
        <Heading>
          Dashboard App
        </Heading>
      </Pane>
    </div>
  );
}

export default App;
