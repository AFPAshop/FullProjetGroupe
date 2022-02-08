<template>
  <GMapMap
    :center="center"
    :zoom="7"
    map-type-id="terrain"
    style="width: 200px; height: 200px"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 48.5494003296, lng: -4.54015016556 },
      markers: [
        {
          position: {
            lat: 48.5494003296,
            lng: -4.54015016556,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>