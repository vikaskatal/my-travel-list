function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: mapZoom,
    center: centerLatLng,
  });


  const geocoder = new google.maps.Geocoder();
  
  const infoWindow = new google.maps.InfoWindow({
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
          infoWindow.setContent(infoWindowContent);
          infoWindow.open(map, marker);
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
                  infoWindow.setContent(infoWindowContent);
                  infoWindow.open(map, marker);
                }
              })(marker, i));

            }
          }
        })
      }

    }

  }) //Map list

}



$(document).ready(function(){

  let filteredLocationList = LocationList.slice();

  const filtersEle = $('#filters');
  let filtersHtml = '';

  const listEle = $('#list');
  let listHtml = '';
  
  function buildList() {
    listEle.empty();
    listHtml = '';
    
    listHtml += '<div class="list-group list-group-numbered">';
  
    filteredLocationList.forEach(({title, description, statePopularity, nearBy, state}, i) => {
      listHtml += `
      <div class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${title}</h5>
          <div>
            <small>3 days ago</small>
          </div>
        </div>
      `;

      if(statePopularity) {
        listHtml += `
        <small class="f-flex align-items-center mt-2 mb-0">
          State: 
          <span class="badge bg-primary rounded-pill">${state}</span>
          State-vise popularity: 
          <span class="badge bg-primary rounded-pill">${statePopularity}</span>
        </small>`;
      }
      if(description.length) {
        listHtml += `<small class="mt-2 mb-0 d-block"><strong>Description: </strong>${description}</small>`;
      }

      if(nearBy.length) {
        listHtml += `<p class="mt-2 mb-0"> <strong>Nearby places: </strong>`
        nearBy.forEach((loc, iLoc)=> {
          listHtml += `${loc}${(nearBy.length-1) === iLoc ? '' : ', '}`
        })
        listHtml += `</p>`
      }

      listHtml += `</div>`
    })

    listHtml += '</div>';
  
    listEle.append(listHtml)
  }
 
  function buildFilters() {
    let selectState = `<div><select class="form-select" id="filterByState">`;
    selectState += `<option value="">Choose State</option>`;
    StateList.forEach((ele) => {
      selectState += `<option value="${ele}">${ele}</option>`
    })
    selectState += `</select></div>`
    filtersHtml += selectState;

    filtersEle.append(filtersHtml)
  }
  
  buildFilters();
  buildList();

  $("#filterByState").on('change', function(){
    let value = this.value;
    if(value) {
      filteredLocationList = LocationList.slice();
      filteredLocationList = filteredLocationList.filter((ele) => ele.state === value )
    }else {
      filteredLocationList = LocationList.slice();
    }
    buildList()
  });

})











