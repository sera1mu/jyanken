const count = { all: 0, win: 0, draw: 0, lose: 0 };
const selects = { 0: "rock", 1: "scissors", 2: "paper" };

const updateImage = (imgName, element) => {
    element[0].children[0].children[0].setAttribute(
        "srcset",
        `img/${imgName}.webp`
    );
    element[0].children[0].children[1].setAttribute(
        "src",
        `img/${imgName}.png`
    );
    return;
};

const render = (imgName, className) => {
    let elem = document.getElementsByClassName(className);
    updateImage(imgName, elem);
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
