import styles from './fluid-react.module.scss';

/* eslint-disable-next-line */
export interface FluidReactProps {}

export function FluidReact(props: FluidReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FluidReact!</h1>
    </div>
  );
}

export default FluidReact;
