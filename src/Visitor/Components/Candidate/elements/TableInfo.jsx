import React, { useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'
import url from '../../../GetAPI/getUrl'
import * as ReactBoostrap from 'react-bootstrap'
import { SearchContext } from '../ListOfCandidate'
import ReactPaginate from 'react-paginate';
import '../../../Assets/sass/customPagination.scss'
import { FaSearch } from 'react-icons/fa'

function TableInfo() {
    const [select, setSelect] = useState("")
    const [Listname, setListname] = useState([])
    // const [select, setSelect] = useState()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(Listname)
    const [pageNumber, setPageNumber] = useState(0)
    const [pageCounter, setPageCounter] = useState()
    const [countPage, setCountPage] = useState([])
    const [filterText, setFilterText] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    let totalPage = countPage - 1
    let inputRef = useRef()

    useEffect(() => {
        const GetCandidate = async () => {
            await axios.get(url.ip + url.getBil)
                .then((response) => {
                    setListname(response.data.lists)
                    setCountPage(response.data.totalPages)
                    setLoading(true)
                }).catch((error) => {
                    console.log(error.response)
                })
        }
        GetCandidate()
    }, [])

    let i = 1;

    const filterData = (value) => {
        if (!value) {
            setListname(data)
        }
        else if (value) {
            const filteredData = []
            setListname(filteredData)
        }
        else if (value != Listname.value) {
            const filteredData = ["No data"]
            setListname(filteredData)
        }
    }

    function Next() {
        setCurrentPage(currentPage + 1)
        axios.get(url.ip + url.getBil + `?page=${currentPage + 1}`).then((res) => {
            setListname(res.data.lists)
        })
    }

    function Back() {
        setCurrentPage(currentPage - 1)
        axios.get(url.ip + url.getBil + `?page=${currentPage - 1}`).then((res) => {
            setListname(res.data.lists)
        })
    }

    function search(event) {
        setSelect(event.target.value)
        axios.get(url.ip + url.getBil + `?bil_number=${select}`).then((res) => {
            setListname(res.data.lists)
        })
    }

    function reset() {
        inputRef.current.value = "";
        axios.get(url.ip + url.getBil).then((res) => {
            setListname(res.data.lists)
            setCountPage(res.data.totalPages)
            setLoading(true)
            setCurrentPage(0)
        })
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <input ref={inputRef} onChange={search} className='form-control mx-3 w-100 shadow-sm d-block mx-auto p-2 px-5 position-relative' placeholder='ຄົ້ນຫາຊື່ ຫລື ເລກໃບບິນ' type="search" name="" id="" />
                <FaSearch className='position-absolute ms-2 text-black' fontSize={30} />
                <button onClick={reset} className='btn btn-secondary mx-2'>Reset</button>
            </div>
            <table className='d-block mx-auto'>
                <tr>
                    <th style={{ width: 100 }} className='fs-4 text-center px-3 py-4'>ລຳດັບ</th>
                    <th style={{ width: 400 }} className='fs-4 text-center'>ຊື່ ແລະ ນາມສະກຸນ</th>
                    <th style={{ width: 450 }} className='fs-4 text-center'>ບ້ານ</th>
                    <th style={{ width: 450 }} className='fs-4 text-center'>ເມືອງ</th>
                    <th style={{ width: 450 }} className='fs-4 text-center'>ແຂວງ</th>
                    <th style={{ width: 450 }} className='fs-4 text-center'>ເລກໃບບິນ</th>
                </tr>
            </table>
            {loading ?
                <div className='overflow-auto mt-3 '>
                    {Listname.length === 0 ? <h1 className='text-center'>ບໍ່ມີຂໍ້ມູນ</h1> : ""}
                    <table className='ms-3'>
                        <tr>
                            <th style={{ width: 100 }} className='fs-4 text-center'></th>
                            <th style={{ width: 500 }} className='fs-4 text-center'></th>
                            <th style={{ width: 400 }} className='fs-4 text-center'></th>
                            <th style={{ width: 450 }} className='fs-4 text-center'></th>
                            <th style={{ width: 450 }} className='fs-4 text-center'></th>
                            <th style={{ width: 350 }} className='fs-4 text-center'></th>
                        </tr>
                        {Listname.map((e) =>

                            <tr key={e.id} className='shadow-sm tableList'>
                                <td className='fs-4 text-center'>{e.id}</td>
                                <td className='py-3 fs-5 text-center'>{`${e.candidate.fullName}`}</td>
                                <td className='fs-5 text-center'>{`${e.candidate.village}`}</td>
                                <td className='fs-5 text-center'>{`${e.candidate.province.name}`}</td>
                                <td className='fs-5 text-center'>{`${e.candidate.district.name}`}</td>
                                <td className='fs-5 text-center'>{`${e.bil_number}`}</td>
                            </tr>
                        )}
                    </table>
                </div> : <ReactBoostrap.Spinner className='loader d-block mx-auto my-5' animation='border' />}



            <div className='mt-4 mb-5 p-1 position-static'>
                <div className='customPagination d-flex justify-content-center py-2'>
                    <button onClick={Back} className={`mx-2 px-3 btn btn-primary p-2`} disabled={currentPage === 0 ? true : false}>back</button>
                    <span className='mt-2 user-select-none'>{currentPage + 1}</span>
                    <button onClick={Next} className={`mx-2 px-3 btn btn-primary p-2`} disabled={currentPage === totalPage ? true : false}>next</button>
                </div>
            </div>
        </div>
    )
}

export default TableInfo