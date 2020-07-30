const count = { all: 0, win: 0, draw: 0, lose: 0 };

const render = (imgName, className) => {
    var elem = document.getElementsByClassName(className);
    if (className === "result") {
        switch (imgName) {
            case "勝ち":
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/win.webp"><img src="img/win.png"></picture><p>Result</p>';
                break;
            case "あいこ":
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/draw.webp"><img src="img/draw.png"></picture><p>Result</p>';
                break;
            case "負け":
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/lose.webp"><img src="img/lose.png"></picture><p>Result</p>';
                break;
            default:
                console.error("Undefined image name.");
                break;
        }
    } else if (className === "pcSelect") {
        switch (imgName) {
            case 0:
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/rock.webp"><img src="img/rock.png"></picture><p>You</p>';
                break;
            case 1:
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/scissors.webp"><img src="img/scissors.png"></picture><p>You</p>';
                break;
            case 2:
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/paper.webp"><img src="img/paper.png"></picture><p>You</p>';
                break;
            default:
                console.error("Undefined image name.");
                break;
        }
    } else {
        switch (imgName) {
            case 0:
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/rock.webp"><img src="img/rock.png"></picture><p>NPC</p>';
                break;
            case 1:
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/scissors.webp"><img src="img/scissors.png"></picture><p>NPC</p>';
                break;
            case 2:
                elem[0].innerHTML =
                    '<picture><source type="image/webp" srcset="img/paper.webp"><img src="img/paper.png"></picture><p>NPC</p>';
                break;
            default:
                console.error("Undefined image name.");
                break;
        }
    }
    return;
};

const judge = (pc, npc) => {
    let result = (pc - npc + 3) % 3;
    switch (result) {
        case 0:
            return "あいこ";
        case 2:
            return "勝ち";
        default:
            return "負け";
    }
};

const addCount = (type) => {
    let elem = document.getElementsByClassName("count");
    count.all++;
    if (type === "勝ち") {
        count.win++;
    } else if (type === "負け") {
        count.lose++;
    } else {
        count.draw++;
    }
    elem[0].innerHTML = `すべて:${count.all} 勝ち:${count.win} あいこ:${count.draw} 負け:${count.lose}`;
    return;
};

const viewResult = (pcSelect, npcSelect, result) => {
    render(pcSelect, "pcSelect");
    render(npcSelect, "npcSelect");
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
