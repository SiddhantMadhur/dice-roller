import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Button, Pressable, ScrollView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  const rand = Math.random() * 5 + 1;
  const rounded = Math.round(rand);
  const [roll, setRoll] = useState(rounded);
  const [history, setHistory] = useState([3, 1, 4, 5]);

  return (
    <TailwindProvider>
      <View>
        <View className="bg-red-600 pb-4 pt-12 ">
          <Text className="text-center text-white shadow-2xl text-2xl">
            Dice Roller
          </Text>
          <Text className="text-center text-white text-lg">
            by Siddhant Madhur
          </Text>
        </View>
        <View className="my-10 mt-40">
          <Text className="text-3xl text-center">Dice rolled: {roll}</Text>
        </View>
        <View className="mt-10 my-23">
          <Pressable
            onPress={() => {
              setHistory([...history, roll])
              const rand = Math.random() * 5 + 1;
              const rounded = Math.round(rand);
              setRoll(rounded);
            }}
            className="bg-red-600 mx-20 py-4 rounded-xl shadow-xl active:bg-red-700 active:scale-105 transition "
          >
            <Text className="text-center text-xl text-white">Roll!</Text>
          </Pressable>
        </View>
        <View>
          <ScrollView className=''>
            
              {
                history.reverse().map((doc, key)=>{
                  return(
                    <Text key={key} className='text-center text-xl my-1'>{doc}</Text>
                  )
                })
              }
              
          </ScrollView>
        </View>
      </View>
    </TailwindProvider>
  );
}
