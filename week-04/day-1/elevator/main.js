const btnAdd = document.querySelector('.add');
const btnRemove = document.querySelector('.remove');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');
const floors = document.querySelectorAll('.floor');
const elevator = document.querySelector('.elevator');
// let f = document.querySelector('.elevator').parentNode.className.substr(11, 12);

const ElevatorModel = {
  elevatorPosition: function elevatorPosition() {
    return parseInt(document.querySelector('.elevator').parentNode.className.substr(11, 12), 10);
  },
  elevatorUp: function elevatorUp() {
    btnUp.addEventListener('click', () => {
      let current = this.elevatorPosition();
      if (current > 0) {
        floors[current - 1].appendChild(elevator);
        floors[current].innerHTML = '';
        current -= 1;
      }
    });
  },
  elevatorDown: function elevatorDown() {
    btnDown.addEventListener('click', () => {
      let current = this.elevatorPosition();
      if (current < 9) {
        floors[current + 1].appendChild(elevator);
        floors[current].innerHTML = '';
        current += 1;
      }
    });
  },
  peopleNum: function peopleNum() {
    return document.querySelector('.elevator').textContent;
  },
  peopleAdd: function peopleAdd() {
    btnAdd.addEventListener('click', () => {
      if (document.querySelector('.elevator').textContent < 10) {
        document.querySelector('.elevator').textContent = parseInt(this.peopleNum(), 10) + 1;
      }
    });
  },
  peopleRemove: function peopleRemove() {
    btnRemove.addEventListener('click', () => {
      if (document.querySelector('.elevator').textContent > 0) {
        document.querySelector('.elevator').textContent = parseInt(this.peopleNum(), 10) - 1;
      }
    });
  },
};

ElevatorModel.elevatorPosition();
ElevatorModel.elevatorUp();
ElevatorModel.elevatorDown();
ElevatorModel.peopleAdd();
ElevatorModel.peopleRemove();
