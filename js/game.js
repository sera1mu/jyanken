const count = { all: 0, win: 0, draw: 0, lose: 0 };
const selects = { 0: "rock", 1: "scissors", 2: "paper" };

const updateImage = (imgName, className) => {
    $(() => {
        let elem = $(`.${className}`);
        elem.children("picture")
            .children("source")
            .attr("srcset", `img/${imgName}.webp`);
        elem.children("img").attr("src", `img/${imgName}.png`);
    });
    return;
};

const render = (imgName, className) => {
    updateImage(imgName, className);
    return;
};

const judge = (pc, npc) => {
    let result = (pc - npc + 3) % 3;
    switch (result) {
        case 0:
            return "draw";
        case 2:
            return "win";
        default:
            return "lose";
    }
};

const addCount = (type) => {
    let elem = document.getElementsByClassName("count");
    count.all++;
    if (type === "win") {
        count.win++;
    } else if (type === "lose") {
        count.lose++;
    } else {
        count.draw++;
    }
    elem[0].innerHTML = `すべて:${count.all} 勝ち:${count.win} あいこ:${count.draw} 負け:${count.lose}`;
    return;
};

const viewResult = (pcSelect, npcSelect, result) => {
    render(selects[pcSelect], "pcSelect");
    render(selects[npcSelect], "npcSelect");
    render(result, "result");
    return;
};

// eslint-disable-next-line no-unused-vars
const pushEvent = (id) => {
    let pcSelect = id;
    let npcSelect = Math.floor(Math.random() * 3);
    let result = judge(pcSelect, npcSelect);
    viewResult(pcSelect, npcSelect, result);
    addCount(result);
    return;
};

const preLoadImages = (imagePaths) => {
    imagePaths.forEach((value) => {
        $(`<img src="${value}">`);
    });
    return;
};

window.onload = () => {
    preLoadImages([
        "img/draw.png",
        "img/draw.webp",
        "img/lose.png",
        "img/lose.webp",
        "img/paper.png",
        "img/paper.webp",
        "img/rock.png",
        "img/rock.webp",
        "img/scissors.png",
        "img/scissors.webp",
        "img/win.png",
        "img/win.webp",
    ]);
    console.log("Loaded images.");
    return;
};
