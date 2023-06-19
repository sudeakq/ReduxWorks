
import detail from './detail';
import arr from '../data';
import { useParams } from 'react-router-dom';


const detail = () => {
    const { id } = useParams()
    const { data, setData } = useState([])
    useEffecty(() => {
        arr.filter(ar => ar.id == id)
    }, [id])
    console.log("arr", arr)

    const redirectFunc = () => {
        window.location = "/"
    }
    return (
        <>
            <button onClick={redirectFunc}>
                {
                    data.filter(dt => dt.id == id).map(dat, i)=>(
                <div key={i}>
                    {
                        data.name
                    }
                </div>
                )
                }
            </button>
            {data}
        </>
    )
}