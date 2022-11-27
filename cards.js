const cards = document.querySelectorAll('.card');
const addCard = document.querySelector('#addCard');

let numarr = []
for(let i = 'a'; i<'g'; i++) {
  let num = i.sup();
  numarr.push(num);
}
let stars = [
  {
    name: "Neutron Star",
    desc: "Neutron stars are formed when a massive star runs out of fuel and collapses. The very central region of the star – the core – collapses, crushing together every proton and electron into a neutron. If the core of the collapsing star is between about 1 and 3 solar masses, these newly-created neutrons can stop the collapse, leaving behind a neutron star. (Stars with higher masses will continue to collapse into stellar-mass black holes.) neutron stars are the smallest and densest currently known class of stellar objects (Imagine).",
    img: 'images/PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg' 
  },
  {
    name: "White Dwarf",
    desc: "weird star likes to party, but it feels lonely whenever it does.",
    img: 'images/DALL·E 2022-06-23 17.31.20 - painting in the style of Dali of a guy sitting in a chair in the center of the brain.png'  
  },
  {
    name: "Magnetar",
    desc: "weird star likes to party, but it feels lonely whenever it does.",
    img: 'images/DALL·E 2022-06-23 17.31.20 - painting in the style of Dali of a guy sitting in a chair in the center of the brain.png' 
  },
  {
    name: "HD 140283",
    desc: "weird star likes to party, but it feels lonely whenever it does.",
    img: 'images/DALL·E 2022-10-23 14.56.10 - Harlem Renaissance style painting of perlin noise.png' 
  },
  
];

const loadCards = () => {
  for(let i = 0; i < stars.length; i++) {
    const star = stars[i];
    const loadCard = createCard(star);
    const bank = document.querySelector('#bank');
    bank.appendChild(loadCard);
    
  }

}//loadCards

/* Add Card Logic */
const addCardToBank = (event) => {
  event.preventDefault();
  const card = createCard();
  document.forms[0].reset();
  document.getElementById("myForm").style.display = "none";
  bank.appendChild(card);
  console.warn('added' , {stars} );

}//addCardToBank

addCard.onclick = addCardToBank;


/* Card Logic */
const createCard = (star) => {
  // create card element
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('draggable', 'true');
  card.id = Math.floor(Math.random() * 10000000)
  card.ondragstart = onDragStart;
  card.ondragend = onDragEnd;
  card.onclick = displayData;
  card.oncontextmenu = deleteCard;

  if(star) {
  card.name = star.name;
  card.desc = star.desc;
  const img = new Image(100,85);
  img.src = star.img;
  img.style.pointerEvents = 'none';
  card.appendChild(img);
  } else {
    if ((document.getElementById('name').value === null) || (document.getElementById('desc').value) === null) {
      window.confirm('name or description fields must be filled')
    }
    card.name = document.getElementById('name').value;
    card.desc = document.getElementById('desc').value;
    appendImage(card);
  }
  return card;
}//createCard

const appendImage = (card) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/x-png,image/gif,image/jpeg');
  input.style.visibility = 'hidden';
  input.onchange = () => {
    const image = new Image(100, 85);
    const file = input.files[0];
    card.image = file;
    console.log(file);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      image.src = event.target.result;
      image.style.pointerEvents = 'none';
      card.appendChild(image);
    }
    reader.readAsDataURL(file);
  }
  input.click();
}//appendImage


const deleteCard = (event) => {
  const willDeleteCard = window.confirm('Do you want to delete this card?');
  if (willDeleteCard) {
    event.target.remove();
  }
}

const displayData = (event) => {
  document.getElementById('star-name').innerHTML = "";
  document.getElementById('star-desc').innerHTML = "";
  const name = event.target.name;
  console.log(name);
  console.log(event.target.id);
  const desc = event.target.desc;
  const nameSpace = document.getElementById('star-name');
  const descSpace = document.getElementById('star-desc');
  
  nameSpace.insertAdjacentText('beforeend', `${name}`);
  descSpace.insertAdjacentText('beforeend', `${desc}`);
  
}

const onDragStart = (event) => {
  console.log('dragging the element');
  event.dataTransfer.setData('id', event.target.id);
  setTimeout(() => {
    event.target.style.visibility = 'hidden';
  }, 50)
}

const onDragEnd = (event) => {
  event.target.style.visibility = 'visible';
  console.log('ended the drag');
}

cards.forEach((card, index) => {
  card.ondragstart = onDragStart;
  card.ondragend = onDragEnd;
})

