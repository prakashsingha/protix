import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FilterSidebar from './components/Main/FilterSidebar';
import ReviewSidebar from './components/Main/ReviewSidebar';
import Review from './components/Main/Review/Review';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <main className='container'>
        <div className='box'>
          <FilterSidebar />
        </div>
        <div className='box'>
          <ReviewSidebar />
        </div>
        <div className='box'>
          <Review />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
