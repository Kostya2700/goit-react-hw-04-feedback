import Counter from './Counter/Counter';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.App}>
      <Counter />
    </div>
  );
};
