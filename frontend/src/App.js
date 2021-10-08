import { Fragment } from "react";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <h1>Welcome To Proshop</h1>
      </main> 
      <Footer />                                               
    </Fragment>
  );
}

export default App;
