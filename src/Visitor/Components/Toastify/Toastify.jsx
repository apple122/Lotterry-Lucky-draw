import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Assets/sass/CustomToastify.scss'

function Toastify(props) {
    let prize_ID = props.PrizeID
    const notify = () => toast.warn(`ລາງວັນທີ ${prize_ID} ຫມົດແລ້ວ!`,{     
    });
    notify()
    return (
        <div>
            <ToastContainer 
                position = 'top-center'
                autoClose= {3000}
                hideProgressBar = {false}
                className="fs-3"
                pauseOnHover = {true}
            />
        </div>
    )
}

export default Toastify