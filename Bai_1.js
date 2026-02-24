let playerIds = [];
let playerPositions = [];
let positions = ["", "Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng ?");

for (let i = 0; i < n; i++) {
  prompt(`Nhập cầu thủ ${i + 1} :`);

  let id = prompt("Mã cầu thủ :");
  playerIds.push(id);

  let pos = +prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo) :");
  playerPositions.push(positions[pos]);
}

let findPos = +prompt(
  "Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ ,3: Tiền vệ, 4: Tiền đạo)",
);

let findPosition = positions[findPos];

console.log(`Đội bóng hiện tại (${playerIds.length} cầu thủ):`);

for (let i = 0; i < playerIds.length; i++) {
  console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
}

let count = 0;
let indexes = [];

for (let i = 0; i < playerPositions.length; i++) {
  if (playerPositions[i] === findPosition) {
    count++;
    indexes.push(i);
  }
}

console.log(`Số cầu thủ ở vị trí ${findPosition}: ${count}`);
console.log(`Các chỉ số cầu thủ ở vị trí ${findPosition}: ${indexes}`);
