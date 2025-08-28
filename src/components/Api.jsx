import { Navbar } from './Navbar';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Card } from './Card';
import './Form.css'
import './Card.css'
import './Api.css'

export const Api = () => {
    const [apidata, setApidata] = useState([])
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [editingid, setEditingId] = useState(null);

    const editHandler = (id) => {
        const postEdit = apidata.find(item => item.id === id);
        setTitle(postEdit.title);
        setDesc(postEdit.desc);
        setEditingId(id);
        console.log(postEdit);
    };


    const titleChangeHandler = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value)
    }

    const descChangeHandler = (e) => {
        console.log(e.target.value);
        setDesc(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title == "" || desc == "") {
            alert("All fields are mandatory");
            return;
        }

        const data = { title, desc }
        console.log({ data })

        if (editingid) {
            await fetch(`https://68ad4038a0b85b2f2cf2993b.mockapi.io/post/${editingid}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            setEditingId(null);
        } else {
            await fetch("https://68ad4038a0b85b2f2cf2993b.mockapi.io/post", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }

        setTitle("");
        setDesc("");
        fetchBlogData();

    }

    const deleteHandler = async (id) => {
        await fetch(`https://68ad4038a0b85b2f2cf2993b.mockapi.io/post/${id}`, {
            method: "DELETE",
        });
        fetchBlogData();
    };


    const fetchBlogData = async () => {
        const response = await fetch("https://68ad4038a0b85b2f2cf2993b.mockapi.io/post")
        const dataapi = await response.json()
        setApidata(dataapi)
        console.log(dataapi)
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    // https://68ad4038a0b85b2f2cf2993b.mockapi.io/post

    return (
        <>
            <Navbar />

            <form action="" className='form-container' onSubmit={handleSubmit}>
                <p className='heading'>API Blog</p>
                <div className='field-div'>
                    <label>Title</label>
                    <input className='text-input' type='text' placeholder='Enter Title...' onChange={titleChangeHandler} value={title} />
                </div>
                <div className='field-div'>
                    <label>Description</label>
                    <textarea className='text-input' placeholder='Enter Description...' rows='5' onChange={descChangeHandler} value={desc}></textarea>
                </div>
                <button className='submit-btn' type='submit'>{editingid ? 'Update' : 'Create'}</button>
            </form>

            <div className='result'>
                <div className='result-flex'>
                    {apidata.length > 0 ? apidata.map(item => <Card id={item.id} title={item.title} desc={item.desc} handleEdit={() => editHandler(item.id)} deleteHandler={() => deleteHandler(item.id)} />) : <p className='empty-p'>!No Posts here</p>}
                </div>
            </div>
        </>
    );
}
