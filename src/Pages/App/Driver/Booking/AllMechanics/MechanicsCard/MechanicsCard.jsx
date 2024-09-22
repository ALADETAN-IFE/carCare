import "./mechanicsCard.css"
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// const ratingStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const decimal = rating - fullStars;

//     return (
//         <div className="rating-stars">
//             {[...Array(fullStars)].map((_, i) => (
//                 <FaStar key={`full-${i}`} className="full-star" />
//             ))}
//             {decimal >= 0.75 ? (
//                 <FaStar className="full-star" />
//             ) : decimal >= 0.25 ? (
//                 <IoIosStarHalf className="half-star" />
//             ) : null}
//             {[...Array(5 - fullStars - (decimal >= 0.25 ? 1 : 0))].map((_, i) => (
//                 <FaStar key={`empty-${i}`} className="empty-star" />
//             ))}
//         </div>
//     );
// };

const ratingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;

    return (
        <div className="rating-stars">
            {[...Array(fullStars)]?.map((_, i) => (
                <IoStar key={`full-${i}`} className="full-star" />
            ))}
            {decimal >= 0.75 ? (
                <IoStar className="full-star" />
            ) : decimal >= 0.25 ? (
                <IoIosStarHalf className="half-star" />
            ) : null}
            {[...Array(5 - fullStars - (decimal >= 0.25 ? 1 : 0))]?.map((_, i) => (
                <IoStar key={`empty-${i}`} className="empty-star" />
            ))}
        </div>
    );
};


// const ratingStars = (rating) => {
//     console.log(rating)
//   const fullStars = Math.floor(rating);
//   const halfStar = rating - fullStars > 0.5;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <div className="rating-stars">
//       {[...Array(fullStars)].map((_, i) => (
//         <FaStar key={i} className="full-star" />
//       ))}
//       {halfStar && <FaStarHalfAlt className="half-star" />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <FaStar key={i} className="empty-star" />
//       ))}
//     </div>
//   );
// };
// const ratingStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const decimal = rating - fullStars;
//     const halfStar = decimal >= 0.25 && decimal < 0.75;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
//     return (
//       <div className="rating-stars">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={i} className="full-star" />
//         ))}
//         {halfStar && <FaStarHalfAlt className="half-star" />}
//         {[...Array(emptyStars)].map((_, i) => (
//           <FaStar key={i} className="empty-star" />
//         ))}
//       </div>
//     );
//   };
// const ratingStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const decimal = rating - fullStars;
  
//     return (
//       <div className="rating-stars">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={i} className="full-star" />
//         ))}
//         {decimal > 0 && decimal < 1 && <FaStarHalfAlt className="half-star" />}
//         {decimal >= 1 && <FaStar className="full-star" />}
//         {[...Array(5 - fullStars - (decimal > 0 ? 1 : 0))].map((_, i) => (
//           <FaStar key={i} className="empty-star" />
//         ))}
//       </div>
//     );
//   };
// const ratingStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const decimal = rating - fullStars;
  
//     return (
//       <div className="rating-stars">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={i} className="full-star" />
//         ))}
//         {decimal >= 0.25 && decimal < 0.75 && <FaStarHalfAlt className="half-star" />}
//         {decimal >= 0.75 && <FaStar className="full-star" />}
//         {[...Array(5 - fullStars - (decimal >= 0.25 ? 1 : 0))].map((_, i) => (
//           <FaStar key={i} className="empty-star" />
//         ))}
//       </div>
//     );
//   };

// const ratingStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const decimal = rating - fullStars;
  
//     return (
//       <div className="rating-stars">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={i} className="full-star" />
//         ))}
//         {decimal > 0 && (
//           <FaStar
//             key={fullStars}
//             className="partial-star"
//             style={{
//               width: `${decimal * 100}%`,
//             }}
//           />
//         )}
//         {[...Array(5 - fullStars - (decimal > 0 ? 1 : 0))].map((_, i) => (
//           <FaStar key={i} className="empty-star" />
//         ))}
//       </div>
//     );
//   };

const MechanicsCard = ({mech}) => { 
    const navigate = useNavigate()
  return (
    <div className="mechanicsCard">
        <div className="mechanicsCardTop" 
        style={{background: !mech?.profilePicture?.pictureUrl ? "black": `url(${mech?.profilePicture?.pictureUrl})`}}>
            {/* <img src={mech?.profilePicture?.pictureUrl} alt="" /> */}
        </div>
        <div className="mechanicsCardBottom">
            <div className="mechanicsCardBottomDetailsTop">
                <p>{mech?.fullName}</p>
                {/* <span>{ratingStars(mech?.rating)}</span> */}
            </div>
            <div className="mechanicsCardBottomDetails">
            Specializations:   
             {/* {
                mech?.specialization?.map((e, i)=> (
                    <span key={i}>{e}</span>
                ))
            }. */}
            {/* <span> {mech?.specialization?.join(", ")}</span>. */}
            </div>
            <div className="mechanicsCardBottomDetails1">
                {/* {mech?.certification.join(", ")} */}
                ASE Certified, Master Technician.
            </div>
            <div className="mechanicsCardBottomDetails2"
            >
                <button className="viewMechProfile"
                onClick={()=> navigate(`/mechanic/${mech?._id}`)}
                >View Profile</button>
            </div>
        </div>
    </div>
  )
}

export default MechanicsCard