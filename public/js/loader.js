import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
    apiKey: "AIzaSyDGcazyPUnW3_lJHSHkHELSVM8T2YwwFUQ",
    version: "weekly",
    ...additionalOptions,
  });
  
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });