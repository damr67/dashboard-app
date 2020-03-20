import React from 'react';
import { Pane, Text } from 'evergreen-ui';

function App() {
  return (
    <Pane
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="default"
    >
      <Text>Pane</Text>
    </Pane>
  );
}

export default App;