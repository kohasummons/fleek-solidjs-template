import solidLogo from './solidLogo.svg';
import styles from './App.module.css';
import fleekLogo from '/fleek-logo.png'
import fleekLogoMark from '/fleek-xyz.png'

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div>
          <a href="https://fleek.xyz/" target="_blank">
            <img src={fleekLogo} class={styles.logo} alt="Fleek logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={solidLogo} class={`${styles.logo} ${styles.solid}`} alt="Solid logo" />
          </a>
        </div>
        <p class="text-[#1a1a1a] mt-16">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://fleek.xyz/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy to <img src={fleekLogoMark} class={styles.logomark} alt="Fleek logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
