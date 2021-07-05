import React,{useEffect} from 'react';
import { ScrollView,Text } from 'react-native';
import { connect } from 'react-redux';
import {fetchProducts} from '../Actions/ProductActions';
import ListItem from './ListItem';


 function List({productsData,fetchProducts}) {
   useEffect(()=>{
       fetchProducts()
   },[])

   return productsData.loading ?(
       <Text>Loading...</Text>
       ): productsData.error ? (
           <Text>Error...</Text>
       ): (  
             
         <ScrollView>
             
              {
                productsData && productsData.preducer && productsData.preducer.items &&  
                productsData.preducer.items.map((item,key)=>{
                    return (
                        <ListItem item={item} key={key}></ListItem>                        
                    )

                })
              }
            
        </ScrollView>

    )
}


const mapStateToProps = (state) =>
  ({
    productsData:state
    
})


const mapDispatchToProps = disptach=> {
  return {
      fetchProducts:()=>disptach(fetchProducts())
  }   
}

export default connect(mapStateToProps, mapDispatchToProps)(List)




