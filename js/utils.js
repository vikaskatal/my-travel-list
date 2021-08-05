function getInitials(titleStr) {
  let titleArr = titleStr.split(' ');

  let elementsToBeRemoved = ['and', '-', 'of'];

  titleArr = titleArr.filter((ele) => {
    return elementsToBeRemoved.indexOf(ele) < 0 
  })

  if(titleArr.length === 1) {
    return titleArr[0][0]+titleArr[0][1]
  } 

  return titleArr.map(ele => ele[0]).join('');
}

function buildInfowindow (props) {
  return `<div class="info-window">
    ${props.title ? `<h4>${props.title}</h4>` : ''}
    ${props.description ? `<p><b>Description:</b> ${props.description}</p>` : ''}
    <p> <b>Address:</b> ${props.title}, ${props.state}</p>
    <p>
      <a target="_blank" href="${buildURL(props.address || props.title)}">Google Search</a>
    </p>
    </div>`;
}


function buildURL(string){
    string = string.split('');
    let url = "https://www.google.com/search?q=";
    for(let i = 0; i < string.length; i++){
        if(string.i === " ") return url = `${url}%20`
        if(string.i === "+") return url = `${url}%2B`
        url = `${url}${string[i]}`
    }
    return url
}


function fancyIconMarker(state) {
  // console.log('fancyIconMarker', state)
  let marker = '';

  switch(state) {
  case 'Karnataka':
  case 'Ladakh':
  case 'Nagaland':
    marker = 'imgs/pins/green.png'
    break;

  case 'Assam':
  case 'Odisha':
    marker = 'imgs/pins/red.png'
    break;

  case 'Himachal Pradesh':
  case 'Arunachal Pradesh':
    marker = 'imgs/pins/yellow.png'
    break;

  case 'Uttarakhand':
  case 'Tamil Nadu':
  case 'Mizoram':
    marker = 'imgs/pins/blue.png'
    break;

  case 'Telangana':
  case 'Punjab':
  case 'Meghalaya':
    marker = 'imgs/pins/orange.png'
    break;

  case 'Andhra Pradesh':
  case 'Rajasthan':
    marker = 'imgs/pins/violet.png'
    break;

  case 'Uttar Pradesh':
  case 'Manipur':
    marker = 'imgs/pins/pink.png'
    break;

  case 'Nagaland':
  case 'Pondicherry':
  case 'Goa':
    marker = 'imgs/pins/gray.png'
    break;

  default:
    marker = 'imgs/pins/red.png'
  }

  return marker;
}


