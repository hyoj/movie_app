import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51Q7Psa2ufL.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://images-na.ssl-images-amazon.com/images/I/41VXPrZfDXL.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://cdn.shopify.com/s/files/1/0747/3829/products/HP2602_b2e4c3a4-eeca-4fc4-afde-ef023c4fb31d_1024x1024.jpg?v=1515503915"
  },
  {
    title: "Star Wars",
    poster: "https://starwarsblog.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {movies.map(movie => {
        return <Movie title={movie.title} poster={movie.poster} />
      })}
    </div>
  );
}

export default App;
