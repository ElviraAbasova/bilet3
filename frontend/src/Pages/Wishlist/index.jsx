import React from 'react'
import "../Home/home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { Addwish } from '../../redux/slices/WishSlice'
const Wishlist = () => {
    const datas = useSelector(state=> state.wish.arr)
    const dispatch = useDispatch()
    const handleRemove=(elem)=>{
        dispatch(Addwish(elem))
    }
  return (
    <section id='menu'>
        <div className="container">
            <div className="top">
            <p>Our menu</p>
        <h2>Wishlist Menu</h2>
     
            </div>
            <div className="menus">
                {datas && datas.map(data=>{
                    return(
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

                    )
                })}
           
               
            </div>
   

        </div>
        

    </section>
  )
}

export default Wishlist