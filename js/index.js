function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: mapZoom,
    center: centerLatLng,
  });


  const geocoder = new google.maps.Geocoder();
  
  const infowindow = new google.maps.InfoWindow({
    content: "<b>vikas</b>",
    size: new google.maps.Size(150,50),
    maxWidth: 300,
  });

  let marker, i, pos;


  LocationList.forEach((location, i) => {

    const infoWindowContent = buildInfowindow(location)

    const markerOptions = {
      label: getInitials(location.title),
      title: location.title,
      map: map,
      icon: {
        url: fancyIconMarker(location.state),
        scaledSize: new google.maps.Size(40, 40),
      }
    }


    if(location.coordinate.length){

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.coordinate[0], location.coordinate[1]),
        ...markerOptions
      });

      google.maps.event.addListener(marker, 'click', ((marker, i) => {
        return () => {
          infowindow.setContent(infoWindowContent);
          infowindow.open(map, marker);
        }
      })(marker, i));

    } else {
      const address = `${location.title}, ${location.state}`;

      if (geocoder) {
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
              console.log(location.title, location.state, '---',`${results[0].geometry.location.lat()}, ${results[0].geometry.location.lng()}`)
              marker = new google.maps.Marker({
                position: results[0].geometry.location,
                ...markerOptions
              });

              google.maps.event.addListener(marker, 'click', ((marker, i) => {
                return () => {
                  infowindow.setContent(infoWindowContent);
                  infowindow.open(map, marker);
                }
              })(marker, i));

            }
          }
        })
      }

    }

  }) //Map list

}




let listEle = document.getElementById("list");





