import { initializeStore } from '../store'

function Home() {
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export async function getStaticProps() {
  const store = initializeStore();
  // store.dispatch(serverRenderClock());

  return {
    props: {},
  }
}

export default Home;