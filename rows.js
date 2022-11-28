const rows = document.querySelectorAll('.row');
const colors = ['rgb(250, 116, 116)', 'rgb(250, 183, 116)', 'rgb(250, 219, 115)', 'rgb(251, 255, 115)', 'rgb(181, 255, 115)', 'rgb(117, 255, 115)'];

const onDragOver = (event) => {
  event.preventDefault();
}

const onDrop = (event) => {
  event.preventDefault();
  const draggedCardId = event.dataTransfer.getData('id');
  const draggedCard = document.getElementById(draggedCardId);
  event.target.appendChild(draggedCard);
  console.log('dropped the element');
}

rows.forEach((row, index) => {
  const label = row.querySelector('.label');
  label.style.backgroundColor = colors[index];
  row.ondragover = onDragOver;
  row.ondrop = onDrop;
})