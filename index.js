let turns = 0;

let a1block = document.getElementById("a1");
let a2block = document.getElementById("a2");
let a3block = document.getElementById("a3");
let a4block = document.getElementById("a4");

let b1block = document.getElementById("b1");
let b2block = document.getElementById("b2");
let b3block = document.getElementById("b3");
let b4block = document.getElementById("b4");

let c1block = document.getElementById("c1");
let c2block = document.getElementById("c2");
let c3block = document.getElementById("c3");
let c4block = document.getElementById("c4");

let d1block = document.getElementById("d1");
let d2block = document.getElementById("d2");
let d3block = document.getElementById("d3");
let d4block = document.getElementById("d4");

let block1 = document.getElementById("block1")
let block2 = document.getElementById("block2")
let block3 = document.getElementById("block3")
let block4 = document.getElementById("block4")
let block5 = document.getElementById("block5")
let block6 = document.getElementById("block6")
let block7 = document.getElementById("block7")
let block8 = document.getElementById("block8")
let block9 = document.getElementById("block9")
let block10 = document.getElementById("block10")
let block11 = document.getElementById("block11")
let block12 = document.getElementById("block12")
let block13 = document.getElementById("block13")
let block14 = document.getElementById("block14")
let block15 = document.getElementById("block15")
let block16 = document.getElementById("block16")
let attemptsBlock = document.getElementById("attempts")
let win = document.getElementById("win");
let newGame = document.getElementById("newGame");
let attempts = 0;
turns = 0;
const width = 4;
const height = 4;
let count = 0;
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const getNumbers = () => {
    const shuffle = (numbers) => {
        let currentIndex = numbers.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [numbers[currentIndex], numbers[randomIndex]] = [
                numbers[randomIndex], numbers[currentIndex]];
        }
        return numbers;
    }
    shuffle(numbers);
    while (numbers.length != 0) {
        count++;
        // let randomNumber = numbers[Math.floor(Math.random() * numbers)];
        // console.log("randomnumber is", randomNumber)
        // for (i = 0; i < numbers.length; i++) {
        //     if (numbers[i] != 0) {

        //     }
        // }
        let usedNumber = numbers.splice(numbers, 1)

        if (count == 17) {
            return
        }
        if (a1block.innerHTML == 0) {
            document.getElementById("a1").innerHTML = usedNumber;
        } else if (a2block.innerHTML == 0) {
            document.getElementById("a2").innerHTML = usedNumber;
        } else if (a3block.innerHTML == 0) {
            document.getElementById("a3").innerHTML = usedNumber;
        } else if (a4block.innerHTML == 0) {
            document.getElementById("a4").innerHTML = usedNumber;
        } else if (b1block.innerHTML == 0) {
            document.getElementById("b1").innerHTML = usedNumber;
        } else if (b2block.innerHTML == 0) {
            document.getElementById("b2").innerHTML = usedNumber;
        } else if (b3block.innerHTML == 0) {
            document.getElementById("b3").innerHTML = usedNumber;
        } else if (b4block.innerHTML == 0) {
            document.getElementById("b4").innerHTML = usedNumber;
        } else if (c1block.innerHTML == 0) {
            document.getElementById("c1").innerHTML = usedNumber;
        } else if (c2block.innerHTML == 0) {
            document.getElementById("c2").innerHTML = usedNumber;
        } else if (c3block.innerHTML == 0) {
            document.getElementById("c3").innerHTML = usedNumber;
        } else if (c4block.innerHTML == 0) {
            document.getElementById("c4").innerHTML = usedNumber;
        } else if (d1block.innerHTML == 0) {
            document.getElementById("d1").innerHTML = usedNumber;
        } else if (d2block.innerHTML == 0) {
            document.getElementById("d2").innerHTML = usedNumber;
        } else if (d3block.innerHTML == 0) {
            document.getElementById("d3").innerHTML = usedNumber;
        } else if (d4block.innerHTML == 0) {
            document.getElementById("d4").innerHTML = numbers;
        }
    } return
}
getNumbers()

let a1 = {
    number: a1block.innerHTML,
    state: false,
    theSame: false
}
let a2 = {
    number: a2block.innerHTML,
    state: false,
    theSame: false
}
let a3 = {
    number: a3block.innerHTML,
    state: false,
    theSame: false
}
let a4 = {
    number: a4block.innerHTML,
    state: false,
    theSame: false
}
let b1 = {
    number: b1block.innerHTML,
    state: false,
    theSame: false
}
let b2 = {
    number: b2block.innerHTML,
    state: false,
    theSame: false
}
let b3 = {
    number: b3block.innerHTML,
    state: false,
    theSame: false
}
let b4 = {
    number: b4block.innerHTML,
    state: false,
    theSame: false
}
let c1 = {
    number: c1block.innerHTML,
    state: false,
    theSame: false
}
let c2 = {
    number: c2block.innerHTML,
    state: false,
    theSame: false
}
let c3 = {
    number: c3block.innerHTML,
    state: false,
    theSame: false
}
let c4 = {
    number: c4block.innerHTML,
    state: false,
    theSame: false
}
let d1 = {
    number: d1block.innerHTML,
    state: false,
    theSame: false
}
let d2 = {
    number: d2block.innerHTML,
    state: false,
    theSame: false
}
let d3 = {
    number: d3block.innerHTML,
    state: false,
    theSame: false
}
let d4 = {
    number: d4block.innerHTML,
    state: false,
    theSame: false
}

let blocks = [a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4]
const gameOver = () => {
    if (a1.state != false && a2.state != false && a3.state != false && a4.state != false && b1.state != false && b2.state != false && b3.state != false && b4.state != false && c1.state != false && c2.state != false && c3.state != false && c4.state != false && d1.state != false && d2.state != false && d3.state != false && d4.state != false) {
        win.style.visibility = "visible";
        newGame.style.visibility = "visible";
    }
}
const pairs = () => {
    if (a1.theSame == true) {
        a1block.innerHTML = "X";
        blocks.splice(0, 1, "")
        block1.removeEventListener("click", block1click);
        gameOver()
    }
    if (a2.theSame == true) {
        a2block.innerHTML = "X"
        blocks.splice(1, 1, "")
        block2.removeEventListener("click", block2click);
        gameOver()
    }
    if (a3.theSame == true) {
        a3block.innerHTML = "X"
        blocks.splice(2, 1, "")
        block3.removeEventListener("click", block3click);
        gameOver()
    }
    if (a4.theSame == true) {
        a4block.innerHTML = "X"
        blocks.splice(3, 1, "")
        block4.removeEventListener("click", block4click);
        gameOver()
    }
    if (b1.theSame == true) {
        b1block.innerHTML = "X"
        blocks.splice(4, 1, "")
        block5.removeEventListener("click", block5click)
        gameOver()
    }
    if (b2.theSame == true) {
        b2block.innerHTML = "X"
        blocks.splice(5, 1, "")
        block6.removeEventListener("click", block6click)
        gameOver()
    }
    if (b3.theSame == true) {
        b3block.innerHTML = "X"
        blocks.splice(6, 1, "")
        block7.removeEventListener("click", block7click)
        gameOver()
    }
    if (b4.theSame == true) {
        b4block.innerHTML = "X"
        blocks.splice(7, 1, "")
        block8.removeEventListener("click", block8click)
        gameOver()
    }
    if (c1.theSame == true) {
        c1block.innerHTML = "X";
        blocks.splice(8, 1, "")
        block9.removeEventListener("click", block9click)
        gameOver()
    }
    if (c2.theSame == true) {
        c2block.innerHTML = "X"
        blocks.splice(9, 1, "")
        block10.removeEventListener("click", block10click)
        gameOver()
    }
    if (c3.theSame == true) {
        c3block.innerHTML = "X"
        blocks.splice(10, 1, "")
        block11.removeEventListener("click", block11click)
        gameOver()
    }
    if (c4.theSame == true) {
        c4block.innerHTML = "X"
        blocks.splice(11, 1, "")
        block12.removeEventListener("click", block12click)
        gameOver()
    }
    if (d1.theSame == true) {
        d1block.innerHTML = "X"
        blocks.splice(12, 1, "")
        block13.removeEventListener("click", block13click)
        gameOver()
    }
    if (d2.theSame == true) {
        d2block.innerHTML = "X"
        blocks.splice(13, 1, "")
        block14.removeEventListener("click", block14click)
        gameOver()
    }
    if (d3.theSame == true) {
        d3block.innerHTML = "X"
        blocks.splice(14, 1, "")
        block15.removeEventListener("click", block15click)
        gameOver()
    }
    if (d4.theSame == true) {
        d4block.innerHTML = "X"
        blocks.splice(15, 1, "")
        block16.removeEventListener("click", block16click)
        gameOver()
    }
};
const hideShowNumber = () => {
    if (a1.state == false) {
        a1block.style.visibility = "hidden"
    } else {
        a1block.style.visibility = "visible"
    }
    if (a2.state == false) {
        a2block.style.visibility = "hidden"
    } else {
        a2block.style.visibility = "visible"
    }
    if (a3.state == false) {
        a3block.style.visibility = "hidden"
    } else {
        a3block.style.visibility = "visible"
    }
    if (a4.state == false) {
        a4block.style.visibility = "hidden"
    } else {
        a4block.style.visibility = "visible"
    }
    if (b1.state == false) {
        b1block.style.visibility = "hidden"
    } else {
        b1block.style.visibility = "visible"
    }
    if (b2.state == false) {
        b2block.style.visibility = "hidden"
    } else {
        b2block.style.visibility = "visible"
    }
    if (b3.state == false) {
        b3block.style.visibility = "hidden"
    } else {
        b3block.style.visibility = "visible"
    }
    if (b4.state == false) {
        b4block.style.visibility = "hidden"
    } else {
        b4block.style.visibility = "visible"
    }
    if (c1.state == false) {
        c1block.style.visibility = "hidden"
    } else {
        c1block.style.visibility = "visible"
    }
    if (c2.state == false) {
        c2block.style.visibility = "hidden"
    } else {
        c2block.style.visibility = "visible"
    }
    if (c3.state == false) {
        c3block.style.visibility = "hidden"
    } else {
        c3block.style.visibility = "visible"
    }
    if (c4.state == false) {
        c4block.style.visibility = "hidden"
    } else {
        c4block.style.visibility = "visible"
    }
    if (d1.state == false) {
        d1block.style.visibility = "hidden"
    } else {
        d1block.style.visibility = "visible"
    }
    if (d2.state == false) {
        d2block.style.visibility = "hidden"
    } else {
        d2block.style.visibility = "visible"
    }
    if (d3.state == false) {
        d3block.style.visibility = "hidden"
    } else {
        d3block.style.visibility = "visible"
    }
    if (d4.state == false) {
        d4block.style.visibility = "hidden"
    } else {
        d4block.style.visibility = "visible"
    }
}
const checkNumbers = () => {
    let check = []
    if (turns == 2) {
        attempts++;
        attemptsBlock.innerHTML = attempts
        turns = 0;
        for (i = 0; i < blocks.length; i++) {
            if (blocks[i].state == true) {
                check.push(blocks[i].number)
                hideShowNumber()
            }
        }
        for (i = 0; i < check.length; i++) {
            if (check[i] == check[i + 1]) {
                console.log("the same")
            } else if (check[i] != check[i + 1]) {
                for (i = 0; i < blocks.length; i++) {
                    if (blocks[i].theSame == false && blocks[i].state == true) {
                        blocks[i].state = false;
                    }
                } check = []
                setTimeout(function () {
                    hideShowNumber()
                }, 3000)
            }
            for (i = 0; i < blocks.length; i++) {
                if (blocks[i].state == true) {
                    blocks[i].theSame = true;
                }
                if (blocks[i].theSame == true) {
                    setTimeout(function () {
                        pairs()
                    }, 1000)
                }
            }
            check = [];
        }
    }
};
let block1click = () => {
    if (turns != 2) {
        a1.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block2click = () => {
    if (turns != 2) {
        a2.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block3click = () => {
    if (turns != 2) {
        a3.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block4click = () => {
    if (turns != 2) {
        a4.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block5click = () => {
    if (turns != 2) {
        b1.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block6click = () => {
    if (turns != 2) {
        b2.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block7click = () => {
    if (turns != 2) {
        b3.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block8click = () => {
    if (turns != 2) {
        b4.state = true
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block9click = () => {
    if (turns != 2) {
        c1.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block10click = () => {
    if (turns != 2) {
        c2.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block11click = () => {
    if (turns != 2) {
        c3.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block12click = () => {
    if (turns != 2) {
        c4.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block13click = () => {
    if (turns != 2) {
        d1.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block14click = () => {
    if (turns != 2) {
        d2.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block15click = () => {
    if (turns != 2) {
        d3.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
let block16click = () => {
    if (turns != 2) {
        d4.state = true;
        hideShowNumber()
        turns++;
        checkNumbers()
    }
}
block1.addEventListener("click", block1click);
block2.addEventListener("click", block2click);
block3.addEventListener("click", block3click);
block4.addEventListener("click", block4click);
block5.addEventListener("click", block5click);
block6.addEventListener("click", block6click)
block7.addEventListener("click", block7click)
block8.addEventListener("click", block8click)
block9.addEventListener("click", block9click)
block10.addEventListener("click", block10click)
block11.addEventListener("click", block11click)
block12.addEventListener("click", block12click)
block13.addEventListener("click", block13click)
block14.addEventListener("click", block14click)
block15.addEventListener("click", block15click)
block16.addEventListener("click", block16click);
newGame.addEventListener("click", () => {
    location.reload();
})