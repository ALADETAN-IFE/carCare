// import { useEffect, useState } from "react"
// import "./mechanicPaggination.css"
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
// import { useNavigate, useParams } from "react-router-dom"

// const MechanicPaggination = () => {
//     const navigate = useNavigate()
//     const {pageNum} = useParams()
//     console.log(pageNum, "num")
//     console.log(pageNum?.split(" ")[1])
//     // ""
//     const [page, setpage] = useState(8)
//     const pages = [1, 2, 3, 4, 5, 6, 7, 8,]
//     console.log(page, "hd  ")
//     // console.log(pages.length)
//     const goBackAPage = () => {
//         setpage(page - 1)
//     }
//     const goFrontAPage = () => {
//         setpage(page + 1)
//     }
//     useEffect(() => {
//         setpage(pageNum?.split(" ")[1])
//     }, [])
    
//     useEffect(() => {
//         navigate(`/mechanics/page= ${page}`)
//     }, [page])
    
//     return (
//         <div className="mechanicPaggination">
//             {
//                 pages?.length > 2 && page !== 1 ?
//                     <button className="pagginateNum_Btn"
//                         onClick={goBackAPage}
//                     ><BiLeftArrow /></button>
//                     : null
//             }
//             {
//                 pages?.map((e, i) => (
//                     <button
//                         className={page == e ? "activePagginateNum pagginateNum" : "pagginateNum"}
//                         key={i}
//                         onClick={() => setpage(e)}
//                     >{e}</button>
//                 ))
//             }
//             {
//                 pages?.length > 2 && pages.length !== page ?
//                     <button className="pagginateNum_Btn"
//                         onClick={goFrontAPage}
//                     ><BiRightArrow /></button>
//                     : null
//             }
//         </div>
//     )
// }

// export default MechanicPaggination

// import { useEffect } from "react";
// import "./mechanicPaggination.css";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
// import { useNavigate, useParams } from "react-router-dom";

// const MechanicPaggination = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
//     // const navigate = useNavigate();
//     // const totalPages = Math.ceil(totalItems / itemsPerPage);

//     // const goToPage = (page) => {
//     //     if (page >= 1 && page <= totalPages) {
//     //         setCurrentPage(page);
//     //     }
//     // }

//     // useEffect(() => {
//     //     navigate(`/mechanics/page=${currentPage}`);
//     // }, [currentPage, navigate]);
  
//     const navigate = useNavigate();
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

    

//     useEffect(() => {
//         // Ensure the currentPage is within valid range
//         if (currentPage < 1) setCurrentPage(1);
//         if (currentPage > totalPages) setCurrentPage(totalPages);
//         console.log(currentPage)
//     }, [currentPage, totalPages]);

//     useEffect(() => {
//         // Update the URL whenever the currentPage changes
//         navigate(`/mechanics/page=${currentPage}`);
//     }, [currentPage, navigate]);

//     const goToPage = (page) => {
//         if (page >= 1 && page <= totalPages) {
//             setCurrentPage(page);
//         }
//     }

//     return (
//         <div className="mechanicPaggination">
//             {currentPage > 1 && (
//                 <button className="pagginateNum_Btn" onClick={() => goToPage(currentPage - 1)}>
//                     <BiLeftArrow />
//                 </button>
//             )}
//             {[...Array(totalPages)].map((_, i) => (
//                 <button
//                     key={i}
//                     className={currentPage === i + 1 ? "activePagginateNum pagginateNum" : "pagginateNum"}
//                     onClick={() => goToPage(i + 1)}
//                 >
//                     {i + 1}
//                 </button>
//             ))}
//             {currentPage < totalPages && (
//                 <button className="pagginateNum_Btn" onClick={() => goToPage(currentPage + 1)}>
//                     <BiRightArrow />
//                 </button>
//             )}
//         </div>
//     );
// }

// export default MechanicPaggination;


import { useEffect } from "react";
import "./mechanicPaggination.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MechanicPaggination = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
    const navigate = useNavigate();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        // Ensure the currentPage is within valid range
        if (currentPage < 1) setCurrentPage(1);
        if (currentPage > totalPages) setCurrentPage(totalPages);
    }, [currentPage, totalPages, setCurrentPage]);

    useEffect(() => {
        // Update the URL whenever the currentPage changes
        navigate(`/mechanics/page=${currentPage}`);
    }, [currentPage]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Determine the range of pages to display
    const getVisiblePages = () => {
        let start = Math.max(currentPage - 1, 1);
        let end = Math.min(currentPage + 1, totalPages);

        if (end - start < 2) {
            if (start === 1) {
                end = Math.min(start + 2, totalPages);
            } else if (end === totalPages) {
                start = Math.max(end - 2, 1);
            }
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="mechanicPaggination"> 
            {currentPage > 3 && (
                <button className="pagginateNum_Btn" onClick={() => goToPage(1)}>
                    &laquo;
                </button>
            )}
            {currentPage > 1 && (
                <button className="pagginateNum_Btn" onClick={() => goToPage(currentPage - 1)}>
                    <BiLeftArrow />
                </button>
            )}
            {visiblePages.map(page => (
                <button
                    key={page}
                    className={currentPage === page ? "activePagginateNum pagginateNum" : "pagginateNum"}
                    onClick={() => goToPage(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button className="pagginateNum_Btn" onClick={() => goToPage(currentPage + 1)}>
                    <BiRightArrow />
                </button>
            )}
            {currentPage < totalPages - 2 && (
                <button className="pagginateNum_Btn" onClick={() => goToPage(totalPages)}>
                    &raquo;
                </button>
            )}
        </div>
    );
};

export default MechanicPaggination;
