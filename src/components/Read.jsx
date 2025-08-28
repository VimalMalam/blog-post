import { useParams } from 'react-router-dom';
import './Read.css';

export const Read = () => {

    const { showId } = useParams()
    console.log(showId);
    const localData = JSON.parse(localStorage.getItem("BlogData") || []);
    console.log(localData);
    const match = localData.find(item => JSON.stringify(item.iahad) === showId);
    console.log(match);

    return (
        <>
            {/* <div className='show'>{match.img}</div> */}
            <h1 className='show'>{match.title}</h1>
            <h1 className='show'>{match.desc}</h1>
        </>
    )
}