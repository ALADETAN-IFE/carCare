import "./mechanicsCard.css"
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

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
//                 <FaStarHalfAlt className="half-star" />
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
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="full-star" />
            ))}
            {decimal >= 0.75 ? (
                <FaStar className="full-star" />
            ) : decimal >= 0.25 ? (
                <FaStarHalfAlt className="half-star" />
            ) : null}
            {[...Array(5 - fullStars - (decimal >= 0.25 ? 1 : 0))].map((_, i) => (
                <FaStar key={`empty-${i}`} className="empty-star" />
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
  return (
    <div className="mechanicsCard">
        <div className="mechanicsCardTop">
            <img src={mech?.image} alt="" />
        </div>
        <div className="mechanicsCardBottom">
            <div className="mechanicsCardBottomDetailsTop">
                <p>{mech?.name}</p>
                <span>{ratingStars(mech?.rating)}</span>
            </div>
            <div className="mechanicsCardBottomDetails">
            Specializations: {
                mech?.specialization?.map((e, i)=> (
                    <span key={i}>{e}</span>
                ))
            }.
            </div>
            <div className="mechanicsCardBottomDetails"></div>
            <div className="mechanicsCardBottomDetails"></div>
        </div>
    </div>
  )
}

export default MechanicsCard