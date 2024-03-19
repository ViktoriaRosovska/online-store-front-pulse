import './Carousel.css'
import {useState, useEffect, Children, cloneElement} from "react";
import {observer} from "mobx-react-lite";
import img from '../../../public/icons/White Circular Buttonsright.png'
import img2 from '../../../public/icons/White Circular Buttons.png'



 const Carousel = observer( ({children}) => {

  const [pages, setPages] = useState([])
   const [offset, setOffset] = useState(0)

   const handleLeftArrowClick = () => {
     setOffset((currentOffset) => {
       const newOffset = currentOffset + 817
       return Math.min( newOffset, 0)
     })
   }
   const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 817
      const maxOffset = -(817 * (pages.length - 1))
      return Math.max( newOffset, maxOffset)
    })
   }




   useEffect(() => {
     setPages(
       Children.map(children, (child) => {
         return cloneElement(child, {
           style: {
             minWidth: "100%",
             maxWidth: "100%",
             height: "100%"
           }
         })
       })
     )
   }, [children])

  

  return (
<div className='main_container'>
  <img className='arrow' src={img2} onClick={handleLeftArrowClick}/>
  <div className='window'>
    <div className='all_pages_container' style={{
      transform: `translateX(${offset}px)`,
    }}>
      {pages}
  </div>

</div>
  <img src={img} className='arrow_r' onClick={handleRightArrowClick}/>
</div>
  )
  })


export default Carousel;



 // {/*<Carousel>*/}



 {/*</Carousel>*/}