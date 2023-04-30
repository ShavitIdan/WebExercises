let width = 80;
let height = 80;
let fontSize = 40;
let lineHeight = 80;
let boxList = []
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const isUsed = {}

$("document").ready(() => {
    initialize();
    $(".box").on("click", generateBoxes)
});

let generateGeneration = 0

const generateBoxes = () => {
    generateGeneration = generateGeneration + 1;
    let placeHere = $(".game");
    for (let i = 0; i < 3; i++) {
        let newBox = $("<div class='boxes'></div>");
        let letter;
        do {
            if (generateGeneration % 2 == 0)
                letter = Object.keys(isUsed)[Math.floor(Math.random() * Object.keys(isUsed).length)]
            else
                letter = letters[Math.floor(Math.random() * letters.length)]
        }
        while (isUsed[letter] && isUsed > 1)
        isUsed[letter] = (isUsed[letter] || 0) + 1
        console.log(isUsed)

        let textElement = $("<span>" + letter + "</span>");
        newBox.append(textElement);
        textElement.hide();
        $(newBox).css({ 'width': width + 'px', 'height': height + 'px', 'font-size': fontSize + 'px', 'line-height': lineHeight + 'px' });
        placeHere.append(newBox);
        lineHeight += 20;
        width += 20;
        height += 20;
        fontSize = width / 2;
    }
    $(".boxes").on("click", revealBox);
}

const initialize = () => {
    $("header").append("<div class='box'></div>")
}

const revealBox = function () {
    let clickedBox = $(this);
    let letter = clickedBox.find('span');

    if (clickedBox.hasClass('revealed') || letter.length === 0 || clickedBox.hasClass('matched')) {
        return;
    }

    letter.show();

    let revealedBoxes = $('.revealed:not(.matched)');
    if (revealedBoxes.length === 1) {
        let otherLetter = revealedBoxes.find('span');
        if (letter.text() === otherLetter.text()) {
            revealedBoxes.css('background-color', 'green');
            revealedBoxes.addClass('matched');
            clickedBox.css('background-color', 'green');
            clickedBox.addClass('matched');
            revealedBoxes.removeClass('revealed');
            clickedBox.removeClass('revealed');
            isUsed[letter.text()] = Math.max(isUsed[letter.text()] - 2, 0)
            if (isUsed[letter.text()] == 0)
                isUsed[letter.text()] = null
        } else {
            setTimeout(function () {
                letter.hide();
                otherLetter.hide();
                revealedBoxes.css('background-color', '');
                revealedBoxes.removeClass('revealed');
                clickedBox.css('background-color', '');
                clickedBox.removeClass('revealed');
            }, 250);
        }
    } else {
        clickedBox.addClass('revealed');
    }
}
