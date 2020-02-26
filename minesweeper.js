

document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)
// Define your `board` object here!

var board = {}
createBoard(5)

//   cells: [
//   { row: 0, col: 0, isMine: true, hidden: true, isMarked: false,}, 
//   { row: 0, col: 1, isMine: false,  hidden: true, isMarked: false,},
//   { row: 0, col: 2, isMine: true, hidden: true, isMarked: false,},
//   { row: 1, col: 0, isMine: false, hidden: true, isMarked: false,},
//   { row: 1, col: 1, isMine: true,  hidden: true, isMarked: false,},
//   { row: 1, col: 2, isMine: true,  hidden: true, isMarked: false,},
//   { row: 2, col: 0, isMine: false, hidden: true, isMarked: false,},
//   { row: 2, col: 1, isMine: true,  hidden: true, isMarked: false,}, 
//   { row: 2, col: 2, isMine: false,  hidden: true, isMarked: false,},
// ]







 
 




 function createBoard(size /*3,4,5,6*/) {
  board.cells = []
  
   for (i = 0; i < size * size; i++) {
    board.cells.push({})
    board.cells[i].row= Math.floor(i / size)
    board.cells[i].col = (i % size)
    board.cells[i].hidden = true
    board.cells[i].isMarked = false
    board.cells[i].isMine = Math.random() >= 0.7
    
    } 
    
    //setMine ()
  }

  function setRows (size, i){
  
    for (i = 0; i < board.cells.length; i++) {
      board.cells[i].row= Math.floor(i / size)
    }
  }

 function setCols (size, i) {
  
 }

  








function startGame() {
  // Don't remove this function call: it makes the game work!
  
  
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = ""
    let count = countSurroundingMines(board.cells[i])

    board.cells[i].surroundingMines = count

  }
  // console.log (board.cells)
  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  for (i = 0; i < board.cells.length; i++) {
    // console.log( i + " is a mine " + board.cells[i].isMine)
    // console.log(i + " is marked " + board.cells[i].isMarked)
    if (board.cells[i].isMine === true) {
      if (board.cells[i].isMarked === false) {
        console.log('mine not marked')
        return
      }
    } else if (board.cells[i].hidden === true) {
      console.log('mine hidden')
      return
    }


  }
  lib.displayMessage('You win!')
}
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {

  //function will get the number of cells surrounding current cell

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0


  for (i = 0; i < surrounding.length; i++) {

    if (surrounding[i].isMine === true) {
      count++
    }
  }

  return count



}
//console.log(lib.getSurroundingCells (board.cells[0]))
