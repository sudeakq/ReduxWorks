import React from 'react';
import arr from '../data';


const Home = () => {

    const redirectFunc = (id) => {
        window.location = '/detail/${id}'
    },
    return {
        < div >
    {
        arr.map(ar, i) => {
    < div onClick={() => redirectFunc(ar.id)}>
        {ar.name}
    </div>
}
</div >

}
export default home

