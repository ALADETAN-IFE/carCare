import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import {notesss} from "../notify"

const NotificationDesc = () => {
    const { id } = useParams()
   
    const [notesDesc, setnotesDesc] = useState({})
    const [loading, setloading] = useState(true)
    const [notes, setnotes] = useState(notesss)
    const navigate = useNavigate()
    useEffect(() => {
        const notesDesc = notes.filter((note) => note._id === id)
        setnotesDesc(notesDesc[0])
        setloading(false)
    }, [])
    console.log(id)
    console.log(notesDesc, "notesDesc")
    // fetch notification data based on id and render it here.

    return (
        <div>
            {
                loading ?
                    <ClipLoader />
                    :
                    <>
                    <button onClick={()=> navigate(-1)}>Go baack</button>
                    <h1>{notesDesc?.notesHead}</h1>
                    <p>{notesDesc?.isRead? "Read" : "Unread"}</p>
                    <h2>Description</h2>
                    <p>{notesDesc?.notesDesc}</p>


                    </>
            }
        </div>
    )
}

export default NotificationDesc