function initMap(locations=LocationList, zoom, center) {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: zoom || mapZoom,
    center: center || centerLatLng,
  });


  const geocoder = new google.maps.Geocoder();
  
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    size: new google.maps.Size(150,50),
    maxWidth: 300,
  });

  let marker, i, pos;


  locations.forEach((location, i) => {

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
  
  // Build List UI
  function buildList() {
    const listEle = $('#list');
    let listHtml = '';

    listEle.empty();
    listHtml += `
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>`;
  
      filteredLocationList.forEach(({title, description, statePopularity, nearBy, state}, i) => {
          listHtml += `
            <tr class="view-details" data-title="${title}">
              <th scope="row">${i+1}</th>
              <td>${title}</td>
              <td>${state}</td>
            </tr>
      `})

      listHtml += `
          </tbody>
        </table>
      </div>`;

    listEle.append(listHtml)
  }
 
  // Build Filters UI
  function buildFilters() {
    let filtersHtml = '';

    let selectState = `<div>
      <select class="form-select" id="filterByState">
        <option value="ALL">Choose State</option>`;
  
    StateList.forEach((ele) => {
      selectState += `<option value="${ele}" ${filterObject.state === ele ? 'selected' : ''}>${ele}</option>`
    })

    selectState += `</select></div>`;
    

    let isVisited = `
      <div>
        <select class="form-select" id="isVisited">
          <option value="ALL">Choose Visited/Unvisited</option>
          <option value="true" ${filterObject.visited === true ? 'selected' : ''}>Visited</option>
          <option value="false" ${filterObject.visited === false ? 'selected' : ''}>Unvisited</option>
        </select>
      </div>`; 

    let showMapByFilters = `<div>
      <button type="button" class="btn btn-outline-primary" id="showMapByFilters">Show Filtered Map</button>
    </div>`;


    filtersHtml += selectState;
    filtersHtml += isVisited;
    filtersHtml += showMapByFilters;

    $('#filters').append(filtersHtml)
  }


  // Filter Function
  function filterFun(key, value) {
    if(value === 'ALL') {
      filterObject[key] = 'ALL'
    } else{
      if(key === 'visited'){
        filterObject[key] = value === 'true' || value === true;
      } else {
        filterObject[key] = value;
      }
    } 

    filteredLocationList = LocationList.slice();
    filteredLocationList = filteredLocationList.filter((ele) => {

    return (filterObject.state === 'ALL' ? true : (ele.state === filterObject.state)) && 
           (filterObject.visited === 'ALL' ? true : (ele.visited === filterObject.visited))
      
    })
     
    buildList();
  }

  // Run and build Filters in UI
  buildFilters();

  // On Init filterFun runs buildList() for us
  filterFun();

  // Filter Action State
  $("#filterByState").on('change', function(){
    let value = this.value;
    filterFun('state', value);
  });

  // Filter Action Visited/Unvisited
  $("#isVisited").on('change', function(){
    let value = this.value;
    filterFun('visited', value);
  });

  // Show filtered locations on map
  $("#showMapByFilters").on('click', function(){
    window.scrollTo(0, 0);
    
    // Temp check for better map zoom option
    if(filterObject.state !== 'ALL') {
      let zoom = 8;
      let center = {
        lat: filteredLocationList[0].coordinate[0],
        lng: filteredLocationList[0].coordinate[1],
      }
      initMap(filteredLocationList, zoom, center);
    } else {
      initMap(filteredLocationList);
    }
  });

  // Capture OnClick from list of locations
  $(document).on("click", '.view-details', function() {
    const title = $(this).attr('data-title');
    
    if(title) {
      let data = LocationList.find((ele) => ele.title === title)
      
      let contentHtml = `
        <div>
          ${data.description ? `<p><b>Description:</b> ${data.description}</p>` : ``}
          
          <p> <b>Address:</b> ${data.title}, ${data.state} </p>
          
          ${data.idealTime ? `<p> <b>Ideal Visit Time:</b> ${data.idealTime}</p>` : ``}`;

  
      if(data.nearBy.length) {
        contentHtml += ` <p> <b>Nearby places: </b>`;
        data.nearBy.forEach((loc, locIndex) => {
          contentHtml += `<span class="badge rounded-pill bg-primary">${loc}</span> `;
        })
        contentHtml += `</p>`;
      }

      contentHtml += `
        <p> 
          <b>Visited:</b> 
          ${data.visited 
            ? `<span class="badge rounded-pill bg-success">Yes<span>` 
            : `<span class="badge rounded-pill bg-danger">Not yet<span>`}
        </p>
        <p>
          <a target="_blank" href="${buildURL(data.address || data.title)}">Google Search</a>
        </p>`;

        contentHtml += `</div>`;

      buildPopupContent(data, contentHtml)
    }
  });

  // Build Popup content(along with title) & open modal
  function buildPopupContent(data, bodyHtml) {
    $('#modalTitle').text('')
    $('#modalTitle').append(data.title);
     
    $('#modalBody').html('')
    $('#modalBody').append(bodyHtml)

    openModal();
  }

  /*
   Popup Utils:
   Use class 'open-modal' in html elements to open modal & 'close-modal' to close
   openModal() & closeModal(), actual functions doing real work
  */
  $('.open-modal').on('click', function(){
    openModal();
  })
  $('.close-modal').on('click', function(){
    closeModal();
  })

  function openModal() {
    $('body').addClass('modal-open');
    $('#exampleModal').addClass('show').show();
    $('body').append('<div class="modal-backdrop fade show"></div>');
  }

  function closeModal() {
    $('body').removeClass('modal-open');
    $('#exampleModal').removeClass('show').hide();
    $('.modal-backdrop').remove();
  }

})











