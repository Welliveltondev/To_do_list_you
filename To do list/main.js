const columns = document.querySelectorAll(".colunm__cards")

let draggedCard;

const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = "move";
}

const dragOver = (event) => {
    event.preventDefault();
}

const dragEnter = ({target}) => {
    if (target.classList.contains("colunm__cards")) {
        target.classList.add("colunm__highlight");
    }
}

const dragLeave = ({target}) => {
    target.classList.remove("colunm__highlight");
} 

const drop = ({target}) => {
    if (target.classList.contains("colunm__cards")) {
        target.classList.remove("colunm__highlight");
        target.append(draggedCard)
    }
} 

const creatCard = ({target}) => {
    if (!target.classList.contains("colunm__cards")) return;

    const card = document.createElement("section");

    card.className = "card";
    card.draggable = "true";
    card.contentEditable = "true";

    card.addEventListener("focusout", () => {
        card.contentEditable = "false";
        if (!card.textContent) card.remove();
    });

    card.addEventListener("dragstart", dragStart);

    target.append(card);
    card.focus();
};

columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dblclick", creatCard);

});


