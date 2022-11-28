const cards = document.querySelectorAll('.card');
const addCard = document.querySelector('#addCard');


let stars = [
  {
    name:"Quark star",
    desc:"A strange star is the last incarnation of a medium-mass sun. (Only the heaviest stars become black holes.) When a star dies, it collapses under the influence of its own gravity. If the corpse is medium mass--more than about 1.44 times the mass of the sun--its gravity squeezes together electrons and protons in the stellar material, forming neutrons. At still greater masses, in theory, neutrons might break down into their component quarks. Under enough pressure, half of the neutrons\' \"down\" quarks might turn into strange quarks, creating an even more compact type of matter (Seife).",
    img:"images/500px-3C58_chandra.jpg",
  },
  {
    name: "Neutron Star",
    desc: "Neutron stars are formed when a massive star runs out of fuel and collapses. The very central region of the star – the core – collapses, crushing together every proton and electron into a neutron. If the core of the collapsing star is between about 1 and 3 solar masses, these newly-created neutrons can stop the collapse, leaving behind a neutron star. (Stars with higher masses will continue to collapse into stellar-mass black holes.) Neutron stars are the smallest and densest currently known class of stellar objects (Imagine).",
    img: 'images/PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg' 
  },
  {
    name: "Pulsar",
    desc: "Pulsars are spinning neutron stars that radiate charged particles and energy in enormous columns that sweep around like beams from a lighthouse. The X-rays originate from million-degree hotspots on a pulsar’s surface, where a powerful magnetic field rips charged particles off the exterior and slams them back down at the opposing magnetic pole (Mann).",
    img: 'images/m82nu_1680.jpg'
  },
  {
    name: "Magnetar",
    desc: "Magnetars are young neutron stars with high magnetic fields that are usually observed at x-ray wavelengths (Taverna).",
    img: 'images/eso1034a.jpg'  
  },
  {
    name: "White Dwarf",
    desc: "White Dwarfs are the stripped cores of dead stars. They contain an exotic material called degenerate electron gas which causes them to gain mass as they contract. The more massive a white dwarf, the tighter its electrons must squeeze together to create an outward pressure strong enough to prevent the star from collapsing under its own weight (Temming).",
    img: 'images/080520_mt_white-dwarf_feat.jpg' 
  }
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

