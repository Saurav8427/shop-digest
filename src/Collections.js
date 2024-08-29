// src/Collections.js
import React, { useEffect, useState } from "react";
import "./Collections.css"; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 10;

  // Fetching data from the fake API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setCollections(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showAll
    ? collections
    : collections.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(collections.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSeeAll = () => {
    setShowAll(true);
  };
	function truncate(str, no_words) {
			// Split the input string into an array of words using the space character (" ") as the delimiter, then extract a portion of the array containing the specified number of words using the splice method, and finally join the selected words back into a single string with spaces between them
			return str.split(" ").splice(0,no_words).join(" ");
	}

  // Calculate the range of items being displayed
  const displayStart = indexOfFirstItem + 1;
  const displayEnd = Math.min(indexOfLastItem, collections.length);

  return (
    <div className="collections-container">
      <div className="collections-header">
        <h2 className="collections-title">Top Shopify Collections</h2>
        <span className="see-all-link" onClick={handleSeeAll}>
          See all
        </span>
      </div>
      <p className="collections-description">
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </p>
      <div className="collections-grid">
        {currentItems.map((collection) => (
          <div key={collection.id} className="collection-card">
            <div>
              <h3 className="collection-card-title">{collection.title}</h3>
              <p className="collection-card-description">
                {truncate(collection.description, 20)}
              </p>
            </div>

            <div className="collection-card-footer">
              <div className="icons-container">
                {/* <img src={collection.image} className="border" width={30} height={30} alt="icon1" /> */}
                {/* <img src={collection.image} className="border" width={30} height={30} alt="icon2" /> */}
                {/* <img src={collection.image} className="border" width={30} height={30} alt="icon3" /> */}
								<div className="flex">
									<div className={`flex items-center justify-center w-10 h-10 rounded-md border`}>
										<img src={collection.image} alt={collection.title} className="w-8 h-8" />
									</div>
									<div className={`flex items-center justify-center w-10 h-10 rounded-md border ml-1`}>
										<img src={collection.image} alt={collection.title} className="w-8 h-8" />
									</div>
									<div className={`flex items-center justify-center w-10 h-10 rounded-md border ml-1`}>
										<img src={collection.image} alt={collection.title} className="w-8 h-8" />
									</div>
								</div>
							</div>
              <div className="divider"></div>
              <div className="footer-content">
                <span className="collection-card-apps">{`${collection.rating.count} Apps`}</span>
                <button className="collection-card-button">
                  Explore more <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && ( // Hide pagination when showing all items
        <div className="pagination-container">
          <div className="pagination-summary">
            <span>Showing <strong>{displayStart}</strong>-<strong>{displayEnd}</strong> of <strong>{collections.length}</strong></span>
          </div>

          <div className="pagination">
            <button
              className="pagination-button"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <div className="pagination-numbers">
              <button
                className="pagination-arrow"
                onClick={() => paginate(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-number ${
                    currentPage === index + 1 ? "pagination-active" : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="pagination-arrow"
                onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>

            <button
              className="pagination-button"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
