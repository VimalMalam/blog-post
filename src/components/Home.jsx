import { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { Form } from './Form'
import { Card } from './Card'
import './Home.css'
import '../App.css'

export const Home = () => {
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("BlogData")) || [])
    const [editData, setEditData] = useState()

    const getData = (mainData) => {
        console.log(mainData);
        setAllData([...allData, mainData])
    }
    console.log(allData);

    useEffect(() => {
        localStorage.setItem("BlogData", JSON.stringify(allData))
    }, [allData])

    const deleteHandler = (id) => {
        console.log(id);
        const deletedata = allData.filter((item) => id !== item.id);
        console.log(deletedata);
        setAllData(deletedata);
    }

    const handleEdit = (id) => {
        const eData = allData.find(item => item.id === id)
        console.log(eData);
        setEditData(eData);
    }

    return (
        <>
            <Navbar />
            <Form getData={getData} editData={editData} setEditData={setEditData} allData={allData} />
            <div className='result'>
                <div className='result-flex'>
                    {allData.length > 0 ? allData.map(item => <Card img={item.img} title={item.title} body={item.body} deleteHandler={() => deleteHandler(item.id)} id={item.id} handleEdit={() => handleEdit(item.id)} />) : <p className='empty-p'>!No Posts here</p>}
                </div>
            </div>
        </>
    )
}