// // import React, { useMemo, useState } from 'react';
// // import BookingPagePagination from '../../Pages/App/Driver/Booking/BookingPagePagination/BookingPagePagination';
// // import { useDispatch } from 'react-redux';
// // import "./table.css"
// // import { setAppbookingFormPage } from '../../Global/Redux-actions/carCare';
// // import { CgMoreVertical } from 'react-icons/cg';

// // const DriverReactTable = ({ totalPages, currentPage, setCurrentPage,
// //     indexOfFirstBooking, indexOfLastBooking, currentBookings1, currentBookings,
// //     setpages }) => {
// //     const dispatch = useDispatch()
// //     const startBooking = () => {
// //         dispatch(setAppbookingFormPage(0))
// //         setpages("addbooking")
// //     }
// //     //   const [currentPage, setCurrentPage] = useState(1);
// //     //   const bookingsPerPage = 5;

// //     // Data for the table
// //     //   const [currentBookings1, setcurrentBookings] = useState([
// //     //     {
// //     //       mechanic: "Anjola Akindoju",
// //     //       serviceNumber: "156GhJ7879",
// //     //       serviceDetails: "Service details",
// //     //       status: "Pending",
// //     //       date: "10/09/24",
// //     //       totalCost: "₦ 93,000",
// //     //       mechanicImage: "https://via.placeholder.com/40"
// //     //     },
// //     //     // Add more rows here
// //     //   ]);

// //     //   const totalBookings = currentBookings1.length;
// //     //   const totalPages = Math.ceil(totalBookings / bookingsPerPage);

// //     // Calculate indices for slicing the data
// //     //   const indexOfLastBooking = currentPage * bookingsPerPage;
// //     //   const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
// //     //   const currentBookings = currentBookings1.slice(indexOfFirstBooking, indexOfLastBooking);

// //     // Define table columns
// //     const columns = useMemo(
// //         () => [
// //             {
// //                 Header: 'Mechanic',
// //                 accessor: 'mechanic',
// //                 Cell: ({ row }) => (
// //                     <div style={{ display: 'flex', alignItems: 'center' }}>
// //                         <img
// //                             src={row.original.mechanicImage}
// //                             alt={row.original.mechanic}
// //                             style={{ borderRadius: '50%', marginRight: '10px' }}
// //                         />
// //                         <span>{row.original.mechanic}</span>
// //                     </div>
// //                 ),
// //             },
// //             {
// //                 Header: 'Service Number',
// //                 accessor: 'serviceNumber',
// //             },
// //             {
// //                 Header: 'Service Details',
// //                 accessor: 'serviceDetails',
// //             },
// //             {
// //                 Header: 'Status',
// //                 accessor: 'status',
// //             },
// //             {
// //                 Header: 'Date',
// //                 accessor: 'date',
// //             },
// //             {
// //                 Header: 'Total Cost',
// //                 accessor: 'totalCost',
// //             },
// //             {
// //                 Header: <CgMoreVertical />,
// //                 accessor: "icon",

// //                 // Cell: ({ row }) => (
// //                 //   <button
// //                 //     onClick={() => handleActionClick(row.original)}
// //                 //     style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white' }}
// //                 //   >
// //                 //     View Details
// //                 //   </button>
// //                 // ),
// //             },
// //         ],
// //         []
// //     );

// //     // Handle button click
// //     const handleActionClick = (booking) => {
// //         alert(`Viewing details for ${booking.serviceNumber}`);
// //     };

// //     const theadStyles = {
// //         color: "var(--Base-Base-Black, #171717)",
// //         textAlign: "center",
// //         fontFamily: "Lora",
// //         fontSize: "18px",
// //         fontStyle: "normal",
// //         fontWeight: "600",
// //         lineHeight: "130%",
// //         padding: '10px'
// //     }

// //     return (
// //         <>
// //             <table style={{ width: '100%', border: '1px solid black' }} className='table'>
// //                 <thead>
// //                     <tr>
// //                         {columns.map(column => (
// //                             <th key={column.Header} style={theadStyles}>
// //                                 {column.render ? column.render('Header') : column.Header}
// //                             </th>
// //                         ))}
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {
// //                         currentBookings?.length < 1 ?
// //                             <div className="no_bookings">
// //                                 <div className='no_bookings_wrapper'>
// //                                     <div className="no_bookings_text">
// //                                         <h3>No Bookings found</h3>
// //                                         <p>You haven't made any bookings yet. Your car deserves the best. Book your first service today.</p>
// //                                     </div>
// //                                     <div className="no-booking-btn-container">
// //                                         <button className="new-booking-btn" onClick={startBooking}>+ New Booking</button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             :
// //                             <>
// //                                 {currentBookings.map((booking, index) => (
// //                                     <tr key={index}>
// //                                         {columns.map(column => (
// //                                             <td key={column.Header} style={{ padding: '10px' }}>
// //                                                 {column.Cell ? column.Cell({ row: { original: booking } }) : booking[column.accessor]}
// //                                             </td>
// //                                         ))}
// //                                     </tr>
// //                                 ))}
// //                             </>
// //                     }

// //                 </tbody>
// //                 {/* Pagination component */}
// //                 {
// //                     currentBookings?.length < 1 ?
// //                         null
// //                         :
// //                         <tr>
// //                             <td colSpan={columns.length}>
// //                                 {/* <div style={{ display: 'flex',}}> */}
// //                                     <BookingPagePagination
// //                                         totalPages={totalPages}
// //                                         currentPage={currentPage}
// //                                         setCurrentPage={setCurrentPage}
// //                                         currentBookings1={currentBookings1}
// //                                         indexOfFirstBooking={indexOfFirstBooking}
// //                                         indexOfLastBooking={indexOfLastBooking}
// //                                     />
// //                                 {/* </div> */}
// //                             </td>
// //                         </tr>

// //                 }
// //             </table>

// //         </>
// //     );
// // };

// // export default DriverReactTable;


// <div className="TransactionHistory">
//             <h2>Transaction History</h2>
//             {allTransaction.length > 0 ? (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Amount</th>
//                             <th>Status</th>
//                             <th>Date of Deposit</th>
//                             <th>Payment Method</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allTransaction.map((transaction: Transaction) => (
//                             <tr key={transaction._id}>
//                                 <td data-label="Amount">{transaction.withdrawable_balance}</td>
//                                 <td data-label="Status">{transaction.status}</td>
//                                 <td data-label="Date of Deposit">{new Date(transaction.createdAt).toLocaleDateString()}</td>
//                                 <td data-label="Payment Method">{transaction.payment_method}</td>
//                                 <td data-label="Actions">
//                                     <button onClick={() => handleConfirm(transaction._id)} disabled={transaction.status === 'completed'} style={{backgroundColor: '#4CAF50'}}>
//                                         {transaction.status === 'completed' ? 'Payment Confirmed' : 'Confirm'}
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No transactions found.</p>
//             )}
//         </div>





// import { useState } from "react";

// interface TableProps<T> {
//     columns: Array<keyof T>;
//     data: T[];
//     emptyMessage?: string;
//     rowsPerPage?: number;
//     onRowClick?: (row: T) => void;  // Row is of type T
// }

// const Table = <T extends object>({
//     columns,
//     data,
//     emptyMessage = "No data available",
//     rowsPerPage = 10,
//     onRowClick,
// }: TableProps<T>) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchQuery, setSearchQuery] = useState("");

//     const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchQuery(event.target.value);
//         setCurrentPage(1); // Reset to first page on search
//     };

//     const filteredData = data.filter(row =>
//         columns.some(column =>
//             String(row[column]).toLowerCase().includes(searchQuery.toLowerCase())
//         )
//     );

//     const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//     const currentData = filteredData.slice(
//         (currentPage - 1) * rowsPerPage,
//         currentPage * rowsPerPage
//     );

//     const handlePageChange = (page: number) => {
//         if (page > 0 && page <= totalPages) {
//             setCurrentPage(page);
//         }
//     };

//     return (
//         <div className="w-full">
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="px-4 py-2 border rounded w-full"
//                 />
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="min-w-full border-collapse">
//                     <thead>
//                         <tr>
//                             {columns.map((column) => (
//                                 <th
//                                     key={String(column)}
//                                     className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-white"
//                                 >
//                                     {String(column)}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentData.length > 0 ? (
//                             currentData.map((row, rowIndex) => (
//                                 <tr
//                                     key={rowIndex}
//                                     className="bg-white border-b last:border-0 hover:bg-gray-100 cursor-pointer"
//                                     onClick={() => onRowClick?.(row)}
//                                 >
//                                     {columns.map((column) => (
//                                         <td
//                                             key={String(column)}
//                                             className="px-4 py-2 text-sm"
//                                             data-label={String(column)}
//                                         >
//                                             {String(row[column])}
//                                         </td>
//                                     ))}
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td
//                                     colSpan={columns.length}
//                                     className="text-center py-4 text-black"
//                                 >
//                                     {emptyMessage}
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="flex justify-between items-center mt-4">
//                 <span className="max-[650px]:text-[12px]">
//                     Showing {currentPage} of {totalPages}
//                 </span>
//                 <span className="flex gap-[10px]">
//                     <button
//                         className="px-4 py-2 bg-gray-200 rounded max-[650px]:px-2 max-[650px]:py-1 max-[650px]:text-[12px]"
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <button
//                         className="px-4 py-2 bg-gray-200 rounded max-[650px]:px-2 max-[650px]:py-1 max-[650px]:text-[12px]"
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                     >
//                         Next
//                     </button>
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Table;