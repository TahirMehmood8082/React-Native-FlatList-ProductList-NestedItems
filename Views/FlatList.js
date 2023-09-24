import flatListStyle from '../Styles/flatListStyle'
import {View, Text, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

const AllFlatList = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getData();
  },[])
  const getData = () =>{
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setProducts(json);
      })
  }
  return(
    <>
    <View style={flatListStyle.container}>
      <View style={{marginTop:'50'}}>
        <FlatList
          data={products}
          renderItem={({item, index})=>{
            return (
              <View style={flatListStyle.itemView}>
                <Image source={{uri:item.image}} style={flatListStyle.productImage}></Image>
                <Text>
                  {item.title.length > 30
                  ? item.title.substring(0, 30)+ '...'
                  : item.title}
                </Text>
                <Text>
                  {item.description.length > 30
                  ? item.description.substring(0, 30)+ '...'
                  : item.description}
                </Text>
                <Text style={flatListStyle.price}>{'$' + item.price}</Text>
              </View>
            )
          }}
        />
      </View>
    </View>
    </>
  )
}

export default AllFlatList;