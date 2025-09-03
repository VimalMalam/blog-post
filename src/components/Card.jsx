import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ img, title, body, handleEdit, deleteHandler, id }) => {
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/read/${id}`);
    };

    return (
        <div className="post-card">
            {/* Gradient Header */}
            <div className="post-card-header">
                <h2>Featured Post</h2>
            </div>

            {/* Image */}
            <div className="post-card-image">
                {img ? (
                    <img src={img} alt="post" />
                ) : (
                    <img
                        src={`https://picsum.photos/id/${id}/500/300`}
                        alt="placeholder"
                    />
                )}
            </div>

            {/* Content */}
            <div className="post-card-body">
                <h3 className="post-card-title">{title}</h3>
                <p className="post-card-desc">{body}</p>

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
