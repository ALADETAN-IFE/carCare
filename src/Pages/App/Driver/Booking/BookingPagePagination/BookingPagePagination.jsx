import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import "./BookingPagePagination.css"
import "../AllMechanics/MechanicPaggination/mechanicPaggination.css";

const BookingPagePagination = ({ totalPages, currentPage, setCurrentPage,
    indexOfFirstBooking, indexOfLastBooking, currentBookings1 }) => {
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="pagination">
            <div className="paginationBodyWrapper">
                <div className="paginationWrapper">
                    {currentPage > 3 && (
                        <button className="pagginateNum_Btn" onClick={() => paginate(1)}>
                            &laquo;
                        </button>
                    )}
                    {currentPage > 1 && (
                        <button className="pagginateNum_Btn" onClick={() => paginate(currentPage - 1)}>
                            <BiLeftArrow />
                        </button>
                    )}
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={currentPage === i + 1 ? 'active' : ''}
                        >
                            {i + 1}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button className="pagginateNum_Btn" onClick={() => paginate(currentPage + 1)}>
                            <BiRightArrow />
                        </button>
                    )}
                    {currentPage < totalPages - 2 && (
                        <button className="pagginateNum_Btn" onClick={() => paginate(totalPages)}>
                            &raquo;
                        </button>
                    )}
                </div>
                <span>
                    Page {indexOfFirstBooking + 1}-{Math.min(indexOfLastBooking, currentBookings1.length)} of {currentBookings1.length}
                </span>
            </div>
        </div>
    )
}

export default BookingPagePagination