// import { useState, useEffect } from 'react';
// import './Form.css'

// export const Form = ({ getData, editData, allData, setEditData }) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");
//     const [img, setImg] = useState("");

//     const titleChangeHandler = (e) => {
//         console.log(e.target.value);
//         setTitle(e.target.value)
//     }

//     const descChangeHandler = (e) => {
//         console.log(e.target.value);
//         setDesc(e.target.value)
//     }

//     const imgChangeHandler = (e) => {
//         console.log(e.target.files[0])
//         console.log(URL.createObjectURL(e.target.files[0]))
//         setImg(URL.createObjectURL(e.target.files[0]))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (title == "" || desc == "") {
//             alert("All fields are mandatory");
//             return;
//         }

//         const data = {
//             id: Math.random(),
//             img: img,
//             title: title,
//             desc: desc
//         }
//         getData(data);

//         setTitle("")
//         setDesc("")
//         setImg("")
//     }
//     useEffect(() => {
//         if (editData) {
//             setImg(editData.img);
//             setTitle(editData.title);
//             setDesc(editData.desc);
//         }
//     }, [editData]);

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         const position = allData.findIndex(item => item.id === editData.id)
//         console.log(position);
//         allData[position] = { id: editData.id, img: img, title: title, desc: desc }
//         console.log(allData);
//         localStorage.setItem("BlogData", JSON.stringify(allData))
//         setEditData()

//         setTitle("")
//         setDesc("")
//         setImg("")
//     }

//     return (
//         <>
//             <form action="" className='form-container' onSubmit={editData ? handleUpdate : handleSubmit}>
//                 <p className='heading'>Your Thought</p>
//                 <div className='field-div'>
//                     <label>Title</label>
//                     <input className='text-input' type='text' placeholder='Enter Title...' onChange={titleChangeHandler} value={title} />
//                 </div>
//                 <div className='field-div'>
//                     <label>Description</label>
//                     <textarea className='text-input' placeholder='Enter Description...' rows='5' onChange={descChangeHandler} value={desc}></textarea>
//                 </div>
//                 <div className='field-div'>
//                     <label>Upload Image</label>
//                     <input type="file" name="" id="" onChange={imgChangeHandler} />
//                 </div>
//                 <button className='submit-btn' type='submit'>{editData ? 'Update' : 'Create'}</button>
//             </form>
//         </>
//     );
// }



import { useState, useEffect } from "react";
import "./Form.css";

export const Form = ({ getData, editData, allData, setEditData }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [img, setImg] = useState("");

    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) {
            alert("Please fill Title and Body!");
            return;
        }

        const data = {
            id: Math.random(),
            img: img,
            title: title,
            body: body
        }
        getData(data);

        console.log(data);
        alert("Post Created 🎉");

        setTitle("");
        setBody("");
        setImg("");
    };

    useEffect(() => {
        if (editData) {
            setImg(editData.img);
            setTitle(editData.title);
            setBody(editData.body);
        }
    }, [editData]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const position = allData.findIndex(item => item.id === editData.id)
        console.log(position);
        allData[position] = { id: editData.id, img: img, title: title, body: body }
        console.log(allData);
        localStorage.setItem("BlogData", JSON.stringify(allData))
        setEditData()

        setTitle("")
        setBody("")
        setImg("")
    }

    return (
        <div className="create-card">
            <div className="card-header">
                <h2>✍️ New Post</h2>
                <p>Share your thoughts with the world</p>
            </div>

            <form className="card-form" onSubmit={editData ? handleUpdate : handleSubmit}>
                {/* Title */}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Enter a catchy title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Body */}
                <div className="input-box">
                    <textarea
                        placeholder="Write your story..."
                        rows="7"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                {/* Upload Image */}
                <div className="upload-box">
                    <label htmlFor="upload">📷 Upload Cover Image</label>
                    <input id="upload" type="file" onChange={handleImgChange} />
                </div>

                {img && <img src={img} alt="preview" className="preview" />}

                {/* Button */}
                <button type="submit" className="create-btn">
                    🚀 Publish
                </button>
            </form>
        </div>
    );
};
