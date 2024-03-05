
import {useState, useEffect, Children, cloneElement} from "react";

const Carousel = ({children}) => {

    const [pages, setPages] = useState([])
   const [offset, setOffset] = useState(0)

   const handleLeftArrowClick = () => {
     setOffset((currentOffset) => {
       const newOffset = currentOffset + 417
       return Math.min( newOffset, 0)
     })
   }
   const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 417
      const maxOffset = -(417 * (pages.length - 1))
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
   }, [])

  

  return (
    <div className='main_container'>
        <img className='arrow' src='public/icons/White Circular Buttons.png' onClick={handleLeftArrowClick}/>
             <div className='window'>
        <div className='all_pages_container' style={{
        transform: `translateX(${offset}px)`,
        }}>
        {pages}
    </div>

    </div>
    <img src='public/icons/White Circular Buttonsright.png' className='arrow_r' onClick={handleRightArrowClick}/>
    </div>
    )
    }


export default Carousel;



 // {/*<Carousel>*/}



 {/*</Carousel>*/}