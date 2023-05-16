import { Card } from "react-bootstrap";
import "../../App.css"
import { useAppContext } from "../../AppContext";

function Fav (){
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
    const favoritesChecker = (id) => {
      const boolean = favorites.some((book) => book.id === id);
      return boolean;
    };
  
    return(
        <div className="container fav">
            <div className="row align-items-center justify-content-center">
            {favorites.length > 0 ? favorites.map((book) => {
  return (
    <Card
      className="col-lg-12 col-md-5 col-sm-12 mx-2 my-2 "
      style={{ width: "18rem", height: "400px" }}
    >
      <Card.Img className="h-50" variant="top" src={book.image_url} />
      <Card.Body>
        <Card.Title className="my-3">{book.title}</Card.Title>
        <Card.Text>{book.authors}</Card.Text>
        {favoritesChecker(book.id) ? (
          <button className="btn btn-primary" onClick={() => removeFromFavorites(book.id)}>
            Remove from Favorite
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => addToFavorites(book)}>
            Add to Favorite
          </button>
        )}
      
      </Card.Body>
    </Card>
  );
}) : (<h1>You dont have any favorites books yet!</h1>)}

        </div>
        </div>
    )
}
export default Fav;