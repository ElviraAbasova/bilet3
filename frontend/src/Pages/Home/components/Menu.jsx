import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses, faDrumstickBite, faIceCream} from '@fortawesome/free-solid-svg-icons'
import { getAllData } from '../../../service/requests'
import { baseUrl } from '../../../service/api'
import { useDispatch, useSelector } from 'react-redux'
import { Addmenu } from '../../../redux/slices/MenuSlice'
import { Addwish } from '../../../redux/slices/WishSlice'
import { Link } from 'react-router-dom'
const Menu = () => {
    const dispatch = useDispatch()
    const datas = useSelector(state=> state.menu.arr)
    useEffect(()=>{
        getAllData(baseUrl).then(res=> dispatch(Addmenu(res)))
    },[])
    const handleAddFAv=(elem)=>{
        dispatch(Addwish(elem))
    }
  return (
    <section id='menu'>
        <div className="container">
            <div className="top">
            <p>Our menu</p>
        <h2>Discover Our Exclisive Menu</h2>
        <div className="selects">
            <div className="select">
               
            <FontAwesomeIcon icon={faDrumstickBite} />
            Main
            </div>
            <div className="select">
            <FontAwesomeIcon icon={faIceCream} />
            Dessert
            </div>
            <div className="select">
            <FontAwesomeIcon icon={faChampagneGlasses} />
            Drinks
            </div>
        </div>
            </div>
            <div className="menus">
                {datas && datas.map(data=>{
                    return(
                        <div key={data._id} className="menu" >
                        <Link to={`/detail/${data._id}`} className="img">
                            <img src={data.image} alt="" />
                        </Link>
                        <div className="about">
                            <h4> {data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                        <h3 onClick={()=>handleAddFAv(data)}>${data.price}</h3>
    
                    </div>

                    )
                })}
           
               
            </div>
            <div className="bottom">
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                <button>Make a Reservation</button>
            </div>
   

        </div>
        

    </section>
  )
}

export default Menu