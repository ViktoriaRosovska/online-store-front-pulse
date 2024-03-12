import {useEffect, useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import {host} from "../../http/index.jsx";
import {useNavigate} from "react-router-dom";
import Cards from "../../components/Cards/Cards.jsx";
import './ManCatalog.css'
import {brand} from "../../http/ProductsApi.jsx";


const ManCatalog =  observer( () => {
// const refreshPage = () => {
//   window.location.reload(false)
// }
const {store} = useContext(Context)
  const navigate = useNavigate()

  const [asyncData, setAsyncData] = useState([]);







  // const brand = async () => {
  //   const {data} = await host.get('/products')
  //   return data
  // }


  useEffect (() => {

     brand().then(res =>  setAsyncData(res))
    store.setProducts(asyncData)
  }, [])


  // const catProduct = store.product.data
// console.log(asyncData.products?.filter(el => el.categories.sex !== 'male'))




  // console.log(asyncData.products)
  // console.log(asyncData.products?.map(el => el._id))






  // console.log(catProduct)

  // useEffect(() => {fetch('https://pulse-run-api.onrender.com/api/products')
  //   .then(res => res.json()).then(res => store.setProducts(res))}
  //  , [])


  return (
    <div>


      {
        asyncData.products?.filter(el => el.categories.sex !== 'female').map((el) => (
            <div key={el._id} className='sport'  style={{cursor: 'pointer'}}>
              <Cards info={el.name}
                     image={el.imgThumbnail}
                     price={el.price}
                     id={el._id}

              />

            </div>

          )
        )
      }


    </div>
  )
})

export default ManCatalog


// console.log(data.products.map(el => el.name))