// import './Card.css'
// import { useNavigate } from 'react-router-dom';

// export const Card = ({ img, title, desc, handleEdit, deleteHandler, id }) => {
//     const navigate = useNavigate();

//     const handleShow = (id) => {
//         navigate(`/read/${id}`);
//     }

//     return (
//         <>
//             <div className="blog-card">
//                 <div className="blog-card-image">
//                     {img ? <img src={img} /> : <img src={`https://picsum.photos/id/${id}/200/300`} />}
//                 </div>

//                 <div className="blog-card-content">
//                     <h3 className="blog-card-title">{title}</h3>
//                     <p className="blog-card-desc">{desc}</p>

//                     <div className="blog-card-actions">
//                         <button type="button" className="btn btn-ghost" onClick={() => handleShow(id)}>
//                             Show
//                         </button>

//                         <button type="button" className="btn" onClick={handleEdit}>
//                             Update
//                         </button>

//                         <button type="button" className="btn btn-danger" onClick={deleteHandler}>
//                             Delete
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ img, title, body, handleEdit, deleteHandler, id }) => {
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/read/${id}`);
    };

    return (
        <div className="post-card">
            {/* Image */}
            <div className="post-card-image">
                {img ? (
                    <img src={img} alt="post" />
                ) : (
                    <img src={`https://picsum.photos/id/${id}/400/250`} alt="placeholder" />
                )}
            </div>

            {/* Content */}
            <div className="post-card-body">
                <h3 className="post-card-title">{title}</h3>
                <p className="post-card-desc">{body}</p>

                {/* Actions */}
                <div className="post-card-actions">
                    <button
                        type="button"
                        className="btn btn-show"
                        onClick={() => handleShow(id)}
                    >
                        👁 Show
                    </button>

                    <button type="button" className="btn btn-update" onClick={handleEdit}>
                        ✏️ Update
                    </button>

                    <button
                        type="button"
                        className="btn btn-delete"
                        onClick={deleteHandler}
                    >
                        🗑 Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
