import React, { useState } from "react";
import bg from "./../assets/images/bg.jpg";
import { FcSearch } from "react-icons/fc";
import "./Body.css"; 

const Body = () => {
  const [bookTitle, setBookTitle] = useState("");  // State for the book title
  const [books, setBooks] = useState([]);  // State for storing the fetched books
  const [loading, setLoading] = useState(false); // Loading state to show loading indicator
  const [error, setError] = useState(null);  // State for errors

  // Function to handle the search
  const handleSearch = async () => {
    if (bookTitle.trim() !== "") {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${bookTitle}`
        );
        const data = await response.json();
        setBooks(data.docs);  // Update the books state with the fetched data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }
  };

  return (
    <div className="body-container">
      <div className="bg-container">
        <img className="bg" src={bg} alt="background" />
        
        <div className="intro-container">
          <h1 className="intro-heading">Book Finder</h1>
          <p className="intro-text">
            Welcome to Book Finder, your gateway to discovering incredible reads with ease. Whether you're searching for a specific title, exploring new genres, or looking for personalized recommendations, we've got you covered. Dive into a vast library of books and let us help you find your next favorite read in just a few clicks.
          </p>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Here"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}  // Update bookTitle state
          />
          <button onClick={handleSearch} className="search-btn">
            <FcSearch className="search-icon" />
          </button>
        </div>
      </div>

      {loading && <p>Loading...</p>} {/* Show loading text while fetching */}
      {error && <p className="error">{error}</p>} {/* Show error message */}

      <div className="book-list">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="book-item">
              <h5>{book.title}</h5>
              <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          ))
        ) : (
          <p>No books found. Try searching for a book!</p>
        )}
      </div>
    </div>
  );
};

export default Body;