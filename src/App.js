import React, { useEffect, useState } from 'react';
import Articles from './Articles';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  const [data, setDate] = useState([]);
  const key = '9eff43c9224547c895fbb96179dd4458';

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}`
      )
      .then((res) => setDate(res.data.articles))
      .then((error) => console.log(error));
  }, [data]);
  return !data.length ? (
    <h1>Loading....</h1>
  ) : (
    <div className="mw-7 center">
      <h2>📰NEWS FEED</h2>
      <ErrorBoundary>
        <Articles news={data} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
