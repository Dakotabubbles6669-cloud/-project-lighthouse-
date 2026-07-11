const arrival = document.querySelector('#arrival');
const enterButton = document.querySelector('#enterButton');
const skipButton = document.querySelector('#skipButton');
const roomGrid = document.querySelector('#roomGrid');
const roomDetailEyebrow = document.querySelector('#roomDetailEyebrow');
const roomDetailNumber = document.querySelector('#roomDetailNumber');
const roomDetailTitle = document.querySelector('#roomDetailTitle');
const roomDetailDescription = document.querySelector('#roomDetailDescription');
const activeLabel = document.querySelector('#activeLabel');
const activeContent = document.querySelector('#activeContent');
const archiveLabel = document.querySelector('#archiveLabel');
const archiveList = document.querySelector('#archiveList');
const roomAction = document.querySelector('#roomAction');

function enterLighthouse() {
  if (!arrival) return;
  arrival.classList.add('is-hidden');
  document.body.classList.remove('arrival-active');
  sessionStorage.setItem('projectLighthouseArrivalSeen', 'true');
}

function selectRoom(room) {
  roomDetailEyebrow.textContent = room.eyebrow;
  roomDetailNumber.textContent = room.number;
  roomDetailTitle.textContent = room.name;
  roomDetailDescription.textContent = room.description;
  activeLabel.textContent = room.activeLabel;
  activeContent.textContent = room.active;
  archiveLabel.textContent = room.archiveLabel;
  archiveList.replaceChildren(...room.archive.map((item) => {
    const entry = document.createElement('li');
    entry.textContent = item;
    return entry;
  }));
  roomAction.href = room.action.href;
  roomAction.textContent = room.action.label;
  roomGrid.querySelectorAll('button').forEach((button) => {
    const selected = button.dataset.roomId === room.id;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function buildRoomExplorer() {
  if (!roomGrid || !Array.isArray(window.lighthouseRooms)) return;
  roomGrid.replaceChildren(...window.lighthouseRooms.map((room) => {
    const button = document.createElement('button');
    button.className = 'room-card';
    button.type = 'button';
    button.dataset.roomId = room.id;
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `<span>${room.number}</span><strong>${room.name}</strong><small>${room.description}</small>`;
    button.addEventListener('click', () => selectRoom(room));
    return button;
  }));
  selectRoom(window.lighthouseRooms[0]);
}

if (arrival) {
  document.body.classList.add('arrival-active');
  if (sessionStorage.getItem('projectLighthouseArrivalSeen')) enterLighthouse();
}

enterButton?.addEventListener('click', enterLighthouse);
skipButton?.addEventListener('click', enterLighthouse);
buildRoomExplorer();
