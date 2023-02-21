import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {userData} from '../api/userdata';

const Status = () => {
  return (
    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
      <FlatList
        data={userData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <>
              <View
                style={{
                  width: 80,
                  height: 80,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContentL: 'center',
                }}>
                <Image
                  source={item.profilePicture}
                  resizeMode="contain"
                  style={{width: 60, height: 60, borderRadius: 50}}
                />
                <Text
                  style={{
                    fontFamily: 'Kalam-Regular',
                    color: 'black',
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  {item.userName}
                </Text>
              </View>
            </>
          );
        }}></FlatList>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
