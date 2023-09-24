import nestedFlatListStyle from '../Styles/nestedFlatListStyle'
import {View, Text, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

const AllFlatList = () => {
  const [products, setProducts] = useState([
    {data: [1,1,1,1,1,1]},
    {data: [1,1,1,1,1,1]},
  ]);

  return(
    <View style={nestedFlatListStyle.container}>
      <View style={{marginTop:'50'}}>
        <FlatList 
        data={products} 
        renderItem={({item,index})=>{
          return(
            <View style={nestedFlatListStyle.itemView}>
              <Text style={nestedFlatListStyle.heading}>
                {'item ' + (index + 1)}
              </Text>
              <FlatList
                data={item.data}
                renderItem={({item,index})=>{
                  return(
                    <View style={{margin: 10}}>
                      <Text style={nestedFlatListStyle.subItem}>
                        {'sub item '+ (index + 1)}
                      </Text>
                    </View>
                  )
                }}
              />
            </View>
          )
        }}
          
        />
      </View>
    </View>
  )
}

export default AllFlatList;