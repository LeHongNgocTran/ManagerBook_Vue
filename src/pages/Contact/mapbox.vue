<script>
import mapboxgl from 'mapbox-gl';

export default {
    name: "map",
    data() {
        return {
            accessToken: "pk.eyJ1IjoiYjE5MTAzMTciLCJhIjoiY2wweTIydXoxMTFkNTNmcDVvand3ankzaCJ9.MfX1_ABZN_Xtsgtv3UU-pA",
        };
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;

        const map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [105.76931044891487, 10.031075921309139],
            zoom: 18
        });

        new mapboxgl.Marker({
                color: "red",
                draggable: true,
                
            })
            .setLngLat([105.76931044891487, 10.031075921309139])
            .addTo(map);

    }
}
</script>

<template>
<div id="mapContainer" class="basemap"></div>
</template>

<style lang="scss" scoped>
.basemap {
    width: 100%;
    height: 100%;
}
</style>
