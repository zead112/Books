import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function BookDetails() {
  const [books, setBooks] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return <div>
    <div className="container">
        <div className="row text-center my-4"><h1>Title : {books.title}</h1>
</div>
        <div className="row mt-3">
<div className="col-4 ">
<img  src={books.image_url} alt="" />

</div>
           <div className="col-8 ">
           <h1>Description:</h1><br />
            <p > {books.description}</p>
            <h1>Authors:</h1><br />
            <p > {books.authors}</p>
            <h1>Genres:</h1><br />
            <p > {books.genres}</p>
           </div>
        </div>
       
    </div>
  </div>;
}
export default BookDetails;
