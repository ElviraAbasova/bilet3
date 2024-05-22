import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../Home/home.scss"
const Detail = () => {
    const datas = useSelector(state=> state.menu.arr)
    const {id}= useParams()
    let data = datas.find(elem=> elem._id == id)
  return (
    <section id='menu'>
        <div className="container">
            <div className="top">
            <p>Our menu</p>
        <h2>Detail</h2>
     
            </div>
            <div className="menus">
               
                 
                        <div key={data._id} className="menu"onClick={()=>handleRemove(data)}>
                        <div className="img">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="about">
                            <h4> {data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                        <h3>${data.price}</h3>
    
                    </div>

                    
             
           
               
            </div>
   

        </div>
        

    </section>
  )
}

export default Detail