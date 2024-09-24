import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-style-switcher/styles.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnBhY2h1Y2EiLCJhIjoiY2lxbGNwaXdmMDAweGZxbmg5OGx2YWo5aSJ9.zda7KLJF3TH84UU6OhW16w";
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [-122.4194, 37.7788],
    zoom: 12
});
// @ts-ignore
map.addControl(new MapboxStyleSwitcherControl());
