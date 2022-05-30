import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'

const ProductList = ({ navigation }) => {

    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {
       
        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((data) => {
            setSuppliers(data);
        });

    }, [])


    const renderSupplier = ({item}) => {
       return <Pressable onPress={() => navigation.navigate("ProductDetail",{id: item.id})}><Text style={{marginTop:10, fontSize:20}}>{item.companyName}</Text></Pressable> 
    }
    return (
        <View>
            <FlatList
            data={suppliers}
            renderItem={renderSupplier}>

            </FlatList>
        </View>
    )
}

export default ProductList