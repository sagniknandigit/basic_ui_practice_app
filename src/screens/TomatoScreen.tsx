import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const TomatoVarients = [
  {
    id: '1',
    title: 'Cherry Tomato',
    subtitle:'Small, sweet, and perfect for salads.',
    image: {uri:'https://imgs.search.brave.com/_dW76ktOlWR_bULgCT_UbH3d_NJgzQYCrpyFQL3-7XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGF0b2Ntcy1hc3Nl/dHMuY29tLzMzMTMw/LzE2MTgzNDA3MDIt/Y2hlcnJ5dG9tYXRv/dG9tbXl0b2UuanBn/P3c9NDAw'}
  },
  {
    id: '2',
    title: 'Roma Tomato',
    subtitle:'Known for thick flesh, ideal for sauces.',
    image:{uri:'https://imgs.search.brave.com/7F9esCpBPUqraEJ48Oc__Jugw-WPArTIeRdxqnOat7I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3J0/aWN1bHR1cmUuY28u/dWsvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTEvMi0xMy5q/cGc'}

  },
  {
    id: '3',
    title: 'BeefSteak Tomato',
    subtitle:'Large and juicy, perfect for sandwiches.',
    image:{uri:'https://imgs.search.brave.com/ywb-UlyOQ87OLZhl51l6DEoedfDCkeEjDehcZyKBMeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VybmV5cy5jb20v/Y2RuL3Nob3AvZmls/ZXMvNjc5NjVBLndl/YnA_dj0xNzI5MDg2/NDAyJndpZHRoPTY0/MA'}

  },
  {
    id: '4',
    title: 'Heirloom Tomato',
    subtitle:'Colorful, flavorful, and rich in texture.',
    image:{uri:'https://imgs.search.brave.com/ple63uSBVUJus0mSfbIZicbps-ltHH0nLzqSKoj0DyU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/MTM4LzA0MC9zbWFs/bC9jbG9zZXVwLW9m/LXZpYnJhbnQtbWl4/LW9mLXJlZC1hbmQt/eWVsbG93LWhlaXJs/b29tLXRvbWF0b2Vz/LWRpc3BsYXllZC1h/dC1sb2NhbC1mYXJt/ZXJzLW1hcmtldC1p/bi1hLXJ1c3RpYy13/b29kZW4tYm94LWZp/bGxlZC13aXRoLXN0/cmF3LWFzc29ydGVk/LWhlaXJsb29tLXRv/bWF0b2VzLWluLWEt/cnVzdGljLXdvb2Rl/bi1jcmF0ZS10b3At/dmlldy1waG90by5q/cGc'}
  }
];

const TomatoScreen = () => {
  const navigation=useNavigation();
  return (
    <View>
      <FlatList data={TomatoVarients} keyExtractor={(item) => item.id} renderItem={({ item })=>(
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('TomatoDetails',{data:item})}>
        <Text style={styles.textitem}>{item.title}</Text>
      </TouchableOpacity>
      )} contentContainerStyle={styles.container}/>
    </View>
    
  )
}

export default TomatoScreen

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50
  },
  card:{
    backgroundColor: '#ffe5e5',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height:150
  },
  textitem:{
    fontSize: 16,
    color: '#900',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})