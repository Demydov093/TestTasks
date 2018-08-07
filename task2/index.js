function modal() {
    var objTo = document.querySelector('body');
    var p = document.createElement("p");
    p.innerHTML = 'SomeText';
    var span = document.createElement("span");
    span.innerHTML = '&times';

    span.addEventListener("click", function () {
        const deleteModal = document.getElementById("modal");
        deleteModal.parentNode.removeChild(deleteModal);
    });
    var divContainer = document.createElement("div");
    divContainer.className = 'container';
    divContainer.appendChild(span);
    divContainer.appendChild(p);
    var myModal = document.createElement("div");
    myModal.className = 'modal';
    myModal.id = 'modal';
    myModal.appendChild(divContainer);
    objTo.appendChild(myModal);
}
