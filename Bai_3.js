let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng ?");
let playerIds = [];
let playerPositions = [];

let positions = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

for (let i = 0; i < n; i++) {
  alert("Nhập cầu thủ " + (i + 1));

  let id = prompt("Mã cầu thủ:");
  let pos = +prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo)");

  playerIds.push(id);
  playerPositions.push(positions[pos - 1]);
}

let findPos = +prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1-4)");
let findPosition = positions[findPos - 1];

let count = 0;
let indexList = [];

for (let i = 0; i < playerPositions.length; i++) {
  if (playerPositions[i] === findPosition) {
    count++;
    indexList.push(i);
  }
}

console.log("Đội bóng hiện tại (" + n + " cầu thủ):");
for (let i = 0; i < playerIds.length; i++) {
  console.log(i + 1 + ". " + playerIds[i] + " - " + playerPositions[i]);
}

console.log("Số cầu thủ ở vị trí " + findPosition + ": " + count);
console.log(
  "Các chỉ số cầu thủ ở vị trí " + findPosition + ": " + indexList.join(", "),
);
