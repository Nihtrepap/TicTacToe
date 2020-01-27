var myTwoD = new Array(3);

/**This function creates a 2D array to build up a gameplan
 * in the back code.
 * Length is 3 , and for each index it puts in a new array.
 * And in the next 2 loops it places spaces in each position.
 */
function getArray(arr) {
    for (i = 0; i < myTwoD.length; i++) {
        myTwoD[i] = []
    }
    for (var i = 0; i < myTwoD.length; i++) {
        for (var j = 0; j < myTwoD.length; j++) {
            myTwoD[i][j] = [" "]
        }
    }
    console.log(this.myTwoD)
}

getArray(myTwoD);

/**This function takes input from player from input elements.
 * It is also the function that takes care of everything that 
 * is happening. Calling all the other functions within.
 * 
 * @param {bool} placed = This checks if element has been "printed"
 * @param {bool} gameOver = This checks if anyone have won
 * @param {Element.value} myX = Takes value input from user((line 44-45) -1 is so the user dont have to care abt array start at 0)
 * @param {Element.value} myY = Takes value input from user
 * 
 * @see placeElement()
 * @see npcO()
 * @see checkWin()
 * 
 */
function takeCords() {
    let placed = false;
    let gameOver = false;
    while (placed == false) {
        let myX = document.getElementById('myXInput').value;
        let myY = document.getElementById('myYInput').value;
        myX--;
        myY--;
        console.log(myX, myY)
        console.log(myTwoD)
        if (myTwoD[myX][myY] == " ") {
            myTwoD[myX][myY] = "X";
            let myNewX = document.createElement("div");
            myNewX.className = "playerStyle";
            myNewX.id = "playerAttack";
            myNewX.style.boxShadow = " 2px 2px 20px 4px green"
            console.log(myNewX)

            placeElement(myNewX, myX, myY);
            document.getElementById("gamePlan").appendChild(myNewX);
            removeInput();
            placed = true;
        } else {
            removeInput();
            alert('Koordinat är tagen');
        }
    }
    console.log(myTwoD);
    npcO(placed);
    checkWin(gameOver);
}

/**This function is for ""NPC" to check if a place in the array is empty.
 * If it is empty it will put in a red circle only in one of 
 * the empty spaces with the help of a bool.
 * 
 * @param {bool} placed = Used to check if a circle have been placed
 */
function npcO() {
    let placed = false;

    while (placed == false) {
        var i = Math.floor(Math.random() * 3);
        var j = Math.floor(Math.random() * 3);
        if (myTwoD[i][j] == ' ' && placed == false) {
            let npc = document.createElement("div");
            npc.className = "npcStyle";
            npc.id = "npcAttack";
            placeElement(npc, i, j);
            document.getElementById("gamePlan").appendChild(npc);
            myTwoD[i][j] = "O";
            placed = true;
        }
    }
}

/**
 * This function sets element position depending on what input it gets
 * @param {Element} myNewX = html element  TODO: Rename parameter, make more 'general'
 * @param {int} x = gets the int from array index
 * @param {int} y = gets the int from array index
 **/
function placeElement(myNewX, x, y) {
    if (x == 0 && y == 0) {
        myNewX.style.top = "190px";
        myNewX.style.left = "140px";
    } else if (x == 0 && y == 1) {
        myNewX.style.top = "190px";
        myNewX.style.left = "400px";
    } else if (x == 0 && y == 2) {
        myNewX.style.top = "190px";
        myNewX.style.left = "680px";
    } else if (x == 1 && y == 0) {
        myNewX.style.top = "320px";
        myNewX.style.left = "140px";
    } else if (x == 1 && y == 1) {
        myNewX.style.top = "320px";
        myNewX.style.left = "400px";
    } else if (x == 1 && y == 2) {
        myNewX.style.top = "320px";
        myNewX.style.left = "680px";
    } else if (x == 2 && y == 0) {
        myNewX.style.top = "500px";
        myNewX.style.left = "140px";
    } else if (x == 2 && y == 1) {
        myNewX.style.top = "500px";
        myNewX.style.left = "400px";
    } else if (x == 2 && y == 2) {
        myNewX.style.top = "500px";
        myNewX.style.left = "680px";
    } else {
        alert("error positioning")
    }
}
/**This function checks if you or npc have 3 in a row.
 * Using local variables to count how many of same on row/line.
 * 
 * @param {bool} won = to make the loop only enter once if a win occure in \ or /
 * @param {int} countX = Checks and sums up how many X are on the horizontal line
 * @param {int} countO = Checks and sums up how many O are on the horizontal line
 * @param {int} countXVertical = Checks and sums up how many X are on the Vertical line
 * @param {int} countOVertical = Checks and sums up how many O are on the Vertical line
 * 
 */
function checkWin() {
    let won = false;

    for (var x = 0; x < myTwoD.length; x++) {
        let countX = 0;
        let countO = 0;
        let countXVertical = 0;
        let countOVertical = 0;
        for (var y = 0; y < myTwoD.length; y++) {
            // makeNpcSmart(countX, x, y);
            // makeNpcSmart(countO, x, y);
            // makeNpcSmart(countXVertical, x, y);
            // makeNpcSmart(countOVertical, x, y);

            if (myTwoD[x][y] == 'X') {
                countX++;
                console.log(countX)
                if (countX == 3) {
                    alert("You won the game");
                    winScreen();
                    break;
                }
            } else if (myTwoD[x][y] == 'O') {
                countO++;
                console.log(countO);
                if (countO == 3) {
                    alert("NPC WON YOU NOOBIE");
                    lossScreen();
                    break;
                }
            }
            if (myTwoD[x][y] == 'X') {
                countXVertical++;
                console.log(`vert X: ${countXVertical}`)
                if (countXVertical == 3) {
                    alert('You won the game')
                    winScreen();
                    break;
                }
            } else if (myTwoD[x][y] == 'O') {
                countOVertical++;
                console.log(`vert Y: ${countOVertical}`)
                if (countOVertical == 3) {
                    alert('NPC WON YOU NOOBIE')
                    lossScreen();
                    break;
                }
            }
            /**
                        These conditions below is to check if you get 
                        3 in a row like this / or \ . 
                        To make it more efficient i set extra condition wrapping it all
                        so it wont get into the condition checking unnecessary
                        */
            if (won == false) {
                if (myTwoD[0][0] == 'X' && won == false) {
                    if (myTwoD[1][1] == 'X') {
                        if (myTwoD[2][2] == 'X') {
                            alert('player won');
                            won = true;
                            winScreen();
                            break;
                        }
                    }
                }
                if (myTwoD[0][0] == 'O' && won == false) {
                    if (myTwoD[1][1] == 'O') {
                        if (myTwoD[2][2] == 'O') {
                            alert('NPC won');
                            won = true;
                            lossScreen();
                            break;
                        }
                    }
                }
                if (myTwoD[0][2] == 'X' && won == false) {
                    if (myTwoD[1][1] == 'X') {
                        if (myTwoD[2][0] == 'X') {
                            alert('player won');
                            won = true;
                            winScreen();
                            break;
                        }
                    }
                }
                if (myTwoD[0][2] == 'O' && won == false) {
                    if (myTwoD[1][1] == 'O') {
                        if (myTwoD[2][0] == 'O') {
                            alert('NPC won');
                            won = true;
                            lossScreen();
                            break;
                        }
                    }
                }
            }
        }
    }
}
/**This function just gives the user a new screen and shows 
 * that the user have won the game! 
 */
function winScreen() {
    document.getElementById("gamePlan").remove();
    document.getElementById("inputAndBtn").remove();

    let winning = document.createElement("div");
    winning.style.width = "500px";
    winning.style.height = "500px";
    winning.style.color = "green";
    winning.style.fontSize = "44px";
    winning.style.position = "absolute";
    winning.innerHTML = "YOU WON THE GAME <Br> YOU LUCKY BAST*RD<Br><Br><Br><Br> **f5 to restart**"
    document.getElementById("ifGameOver").appendChild(winning);

}
/**This function just gives the user a new screen and shows 
 * that the user have lost the game! 
 */
function lossScreen() {
    document.getElementById("gamePlan").remove();
    document.getElementById("inputAndBtn").remove();

    let winning = document.createElement("div");
    winning.style.width = "500px";
    winning.style.height = "500px";
    winning.style.color = "red";
    winning.style.fontSize = "44px";
    winning.style.position = "absolute";
    winning.innerHTML = "YOU LOST THE GAME <Br> YOU POOR BAST*RD<Br><Br><Br><Br> **f5 to restart**"
    document.getElementById("ifGameOver").appendChild(winning);

}
/**This is just to make code "cleaner" and is used to delete input box text */
function removeInput() {
    document.getElementById('myYInput').value = "";
    document.getElementById('myXInput').value = "";
}

/**this function sets up the game plan numbers on top and side */
window.onload = function() {
    var move = 180;
    for (i = 1; i < 4; i++) {
        let x = document.createElement("div");
        x.style.id = `num${i}`;
        x.style.width = "50px";
        x.style.height = "50px";
        x.style.backgroundColor = "white";
        x.style.top = `${move}px`;
        x.style.position = "absolute";
        x.style.boxShadow = "2px 2px 20px 2px darkCyan";
        x.style.fontSize = "42px";
        x.style.textAlign = "center";
        x.innerHTML = `<strong>${i}</strong>`;
        document.getElementById("gamePlan").appendChild(x);
        move += 150;
    }

    var moveY = 150;
    for (i = 1; i < 4; i++) {
        let x = document.createElement("div");
        x.style.id = `num${i}`;
        x.style.width = "50px";
        x.style.height = "40px";
        x.style.backgroundColor = "white";
        x.style.boxShadow = "1px 2px 20px 1px darkCyan";
        x.style.left = `${moveY}px`
        x.style.top = `107px`;
        x.style.position = "absolute";
        x.style.fontSize = "42px";
        x.style.textAlign = "center"
        x.innerHTML = `<strong>${i}</strong>`;
        document.getElementById("gamePlan").appendChild(x);
        moveY += 290;
    }
}

function makeNpcSmart(count, x, y) {
    if (count == 2) {
        let npc = document.createElement("div");
        npc.className = "npcStyle";
        npc.id = "npcAttack";
        if (myTwoD[x][y++] != 'X' || 'O') {
            y++;
            placeElement(npc, x, y)
            console.log('made npx smart y++')

        } else if (myTwoD[x][y--] != 'X' || 'O') {
            y--;
            placeElement(npc, x, y)
            console.log('made npc smart y--')
        }

    }

}