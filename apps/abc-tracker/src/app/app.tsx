import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Menu } from '@leslie/menu'

export function App() {
  return (
    <>
      <Menu title='ABC Tracker' />
      <NxWelcome title="abc-tracker" />
      <div />
    </>
  );
}

export default App;
