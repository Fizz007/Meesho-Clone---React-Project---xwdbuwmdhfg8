import React, { useContext, useState } from 'react';
// import withLoader from '../../HOC/withLoader';
import Product from '../Product/Product'
import '../List/List.css'
import axios from 'axios';
import Footer from '../component/Footer/Footer';

const List = () => {

    const [data, setData] = useState(null)

    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

  const producturl = () => {
   
      axios.get(url).then((response) => {
        // console.log(response.data)
        setData(response.data)
       
      })

    
  }

    React.useEffect(() => {
        producturl()
    }, [])

    

    return (
        <>
        <div className="each-item-wrapper">
            
            {
                data && data.map((eachItem, i) => {
                    return <Product item={eachItem} key={i} />
                })
            }

        </div>
       
        </>
    )
}

export default List;