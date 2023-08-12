
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/NavBar/Navbar";
import Row from "./Components/Row/Row";
import requests from "./Requests";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS"
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow 
      />
       <Row 
      title="Trending Now"
      fetchUrl={requests.fetchTrending}
      />
       <Row 
      title="Top Rated"
      fetchUrl={requests.fetchTopRatedMovies}
      />
       <Row 
      title="Action Movie"
      fetchUrl={requests.fetchActionMovies}
      />
       
       <Row 
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      />
       <Row 
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
       <Row 
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
       <Row 
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
