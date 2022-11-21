async function getCenters() {
  const res = await fetch(
    "https://3000-googlemaps-jssamples-wy5atajly1u.ws-us77.gitpod.io/bloodCenters"
  );
  return res.json();
}

function coordinatesToPosition(coordinates) {
  return { lat: coordinates[0], lng: coordinates[1] };
}

async function initMap() {
  const brazilCenter = { lat: -14.4086569, lng: -51.31668 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: brazilCenter,
  });

  const centers = await getCenters();
  centers.map((center) => {
    const position = coordinatesToPosition(center.point.coordinates);
    new google.maps.Marker({
      map: map,
      position,
    });
  });
}

window.initMap = initMap;
