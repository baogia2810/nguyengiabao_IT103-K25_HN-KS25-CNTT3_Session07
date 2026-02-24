let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Phạm Văn D",
  "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
  console.log("Danh sách cầu thủ:");
  for (let i = 0; i < playerIds.length; i++) {
    console.log(
      i +
        1 +
        ". " +
        playerIds[i] +
        " - " +
        playerNames[i] +
        " - " +
        playerJerseyNumbers[i],
    );
  }
}

function updatePlayer(playerId, newName, newJerseyNumber) {
  for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === playerId) {
      playerNames[i] = newName;
      playerJerseyNumbers[i] = newJerseyNumber;
      return true;
    }
  }
  return false;
}

let id = prompt("Nhập mã cầu thủ muốn cập nhật:");
let name = prompt("Nhập tên mới:");
let jersey = +prompt("Nhập số áo mới (1-99):");

let result = updatePlayer(id, name, jersey);

if (result) {
  console.log("Cập nhật thành công");
  printTeamRoster();
} else {
  console.log("Không tìm thấy cầu thủ với mã này");
}
