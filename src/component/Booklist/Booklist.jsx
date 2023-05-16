import "../../App.css";
import { ApiURL } from "../../API";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";
function Booklist() {
  const navigate = useNavigate();

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(ApiURL)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleimg(id){
    navigate(`/Books/Details/${id}`);
  }
  return (
    <div className="container d-flex">
      {/* <div className="book1"> */}
      <div className="row align-items-center justify-content-center">
        {book.map((book) => {
          return (
            <Card
              className="col-lg-12 col-md-5 col-sm-12 mx-2 my-2 card "
              style={{ width: "30%", height: "400px" }}
            >
              <Card.Title className="my-3 card-title">{book.title}</Card.Title>

              <Card.Img
                onClick={() => handleimg(book.id)}
                className="card-img"
                variant="top"
                src={book.image_url}
              />
              <Card.Body>
                <Card.Text className="card-authors">{book.authors}</Card.Text>
                {favoritesChecker(book.id) ? (
                  <button
                    className="btn btn-primary "
                    onClick={() => removeFromFavorites(book.id)}
                  >
                    Remove from Favorite
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => addToFavorites(book)}
                  >
                    Add to Favorite
                  </button>
                )}
                {/* <Button onClick={() => addToFavorites(book)} variant="primary">
                  Add to Favorite
                </Button> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}
export default Booklist;
