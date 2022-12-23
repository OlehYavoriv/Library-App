import { useNavigate } from "react-router-dom";

const PaidBooksItem = ({ books }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-taupe w-72 px-4 py-4 rounded"
        onClick={() => navigate(`/${books.id}`)}
      >
        <div className="relative w-full mb-2 h-48 ">
          <img
            className="object-contain w-full h-full rounded"
            src={
              "https://desolate-cove-47308.herokuapp.com/api/books/" +
              books.id +
              "/image"
            }
            alt={books.title}
          />
        </div>
        <div className="px-4 py-4 text-sage-green">
          <h3 className="text-center text-bold mb-2">{books.title}</h3>
          <p className="text-bold text-black text-center mb-2">
            {books.price} $
          </p>
          <div className="flex justify-between align-center">
            <p className="text-bold text-black">Author:</p>
            <p>{books.author}</p>
          </div>
          <div className="flex justify-between align-center">
            <p className="text-bold text-black">Genre:</p>
            <p>{books.genre}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidBooksItem;
