function solve() {
    const inputFields = Array.from(document.querySelectorAll('#container input'));
    let filmName = inputFields[0];
    let hall = inputFields[1];
    let price = inputFields[2];

    document.querySelector('button').addEventListener('click', onClick);

    function onClick(ev) {
        ev.preventDefault();

        const priceNum = Number(price.value).toFixed(2);

        //ако има празно поле не изпълнявай програмата
        //ако цената не е число не изпълявай програмата
        if (filmName.value == '' || hall.value == '' || price.value == '') {
            throw new Error('You have empty field');
        }

        if (isNaN(priceNum) == true) {
            throw new Error('Price is not a number');
        }

        const moviesList = document.querySelector('#movies ul');
        const li = document.createElement('li');
        moviesList.appendChild(li);
        const span = li.appendChild(createElement('span', filmName.value));
        const strong = li.appendChild(createElement('strong', `Hall: ${hall.value}`));
        const div = li.appendChild(createElement('div'));
        const divStrong = div.appendChild(createElement('strong', priceNum));
        const divInput = div.appendChild(createElement('input'));
        divInput.placeholder = 'Tickets Sold';

        const archiveBtn = div.appendChild(createElement('button', 'Archive'));
        const deleteBtn = createElement('button', 'Delete');
        const archive = document.getElementById('archive').children;

        archiveBtn.addEventListener('click', onArchive);
        deleteBtn.addEventListener('click', onDelete);
        archive[2].addEventListener('click', onClear);

        filmName.value = '';
        hall.value = '';
        price.value = '';

        function onClear() {
            const archiveList = Array.from(archive[1].children);
            archiveList.forEach(x => x.remove());
        }

        function onDelete() {
            li.remove();
        }

        function onArchive() {
            const archiveUl = document.getElementById('archive').children;
            //ако divInput.value не е число по голямо от 0 не изпълнявай
            console.log(divInput.value);

            if (Number(divInput.value) > 0) {
                const total = Number(divInput.value) * (priceNum);

                strong.textContent = `Total amount: ${total.toFixed(2)}`;
                divInput.remove();
                divStrong.remove();
                archiveBtn.remove();
                div.appendChild(deleteBtn);
                archiveUl[1].appendChild(li);
            }
        }

        function createElement(tag, text) {
            let elem = document.createElement(tag);
            if (text) {
                elem.textContent = text;
            }

            return elem;
        }
    }
}