import "./BookingPagePagination.css"

const BookingPagePagination = ({ totalPages, currentPage, setCurrentPage,
    indexOfFirstBooking, indexOfLastBooking, currentBookings1 }) => {
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="pagination">
            <div className="paginationBodyWrapper">
                <div className="paginationWrapper">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={currentPage === i + 1 ? 'active' : ''}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <span>
                    Page {indexOfFirstBooking + 1}-{Math.min(indexOfLastBooking, currentBookings1.length)} of {currentBookings1.length}
                </span>
            </div>
        </div>
    )
}

export default BookingPagePagination