import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import "./Read.css";

export const Read = () => {
    const { readId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem("BlogData")) || [];
        const found = storedPosts.find(item => item.id == readId);
        setPost(found);
    }, [readId]);

    if (!post) {
        return <p style={{ textAlign: "center", marginTop: "40px" }}>Post not found</p>;
    }

    return (
        <>
            <Navbar />
            <div className="read-container">
                <img src={post.img} alt={post.title} className="read-image" />
                <h1 className="read-title">{post.title}</h1>
                <p className="read-desc">{post.desc}</p>
            </div>
        </>
    );
};
