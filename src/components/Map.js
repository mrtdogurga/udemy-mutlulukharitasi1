import React, { Component } from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


class Map extends Component{

    state = {
        region : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }, 
    }

    componentDidMount(){
        console.log(this.props.data);

        const { yourLongLat } = this.props.data;
        this.setState({
            region: {
                latitude : yourLongLat[0],
                longitude : yourLongLat[1],
                latitudeDelta: 5,
                longitudeDelta: 5,
            }
        })
    }

    render(){
        const { yourLongLat,herLongLat } = this.props.data;
        const origin = {latitude: yourLongLat[0], longitude: yourLongLat[1]};
        const destination = {latitude: herLongLat[0], longitude:herLongLat[1]};
        const GOOGLE_MAPS_APIKEY = 'AIzaSyBvjaAoD4lm6QSlvUC7VOyW-N-ZqFuI80k';

        return(
            <View style={{flex:1, backgroundColor:'green'}}>
                <MapView
                style={{flex:1}} 
                region ={this.state.region}
                >
                   <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={6}
                        strokeColor="#05B3FD"
                    /> 
                </MapView>
            </View>
        );
    }
}


export default Map
