import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import MyMovie from "./MyMovie";

const Url = "http://www.omdbapi.com/?apikey=412b1908&s=";
class MySlider extends Component {
  state = {
    movies: [],
    error: false,
    errorMessage: "",
    isLoading: true
  };
  fetchSearch = async () => {
    try {
      const resp = await fetch(`${Url}${this.props.searchKey}`);

      if (resp.ok) {
        const dataObj = await resp.json();
        this.setState({ movies: dataObj.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMessage: error.message, isLoading: false });
    }
  };
  
  componentDidMount = () => {
    this.fetchSearch();
  };

  render() {
    return (
      <section className="mb-4 px-5">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="flex-grow-1 fs-3">{this.props.title}</h2>
          {this.state.isLoading && !this.state.error && (
            <Spinner animation="border" role="status" className="text-danger">
            <span className="visually-hidden text-danger">Loading...</span>
            </Spinner>
          )}
        </div>
        <div className="slider d-flex flex-nowrap ">
          {this.state.movies.length === 0 && !this.state.error && !this.state.isLoading && (
            <Alert variant="danger">No Movies found...</Alert>
          )}
          {this.state.error && !this.state.isLoading && (
            <Alert variant="danger">{this.state.errorMessage ? this.state.errorMessage : "Errore nel reperire i dati"}</Alert>
          )}
          {this.state.movies.map((movie) => (
            <MyMovie key={movie.imdbID} img={movie.Poster} />
          ))}
        </div>
      </section>
    );
  }
}
export default MySlider;