function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    document.getElementById('add').addEventListener('click', onAdd);

    const [_, openSection, progressSection, completeSection] = Array.from(document.querySelectorAll('section')).map(s => s.children[1]);

    function onAdd(ev) {
        ev.preventDefault();

        let article = document.createElement('article');
        openSection.appendChild(article);
        let h3 = article.appendChild(createElements('h3', task.value));
        let p1 = article.appendChild(createElements('p', `Description: ${description.value}`));
        let p2 = article.appendChild(createElements('p', `Due Date: ${date.value}`));
        let div = article.appendChild(createElements('div', '', 'flex'));
        let startBtn = div.appendChild(createElements('button', 'Start', 'green'));
        let deleteBtn = div.appendChild(createElements('button', 'Delete', 'red'));
        let finishBtn = createElements('button', 'Finish', 'orange');
        startBtn.addEventListener('click', onStart);
        deleteBtn.addEventListener('click', onDelete);
        finishBtn.addEventListener('click', onFinish);

        task.value = '';
        description.value = '';
        date.value = '';


        function onStart() {
            startBtn.remove();
            div.appendChild(finishBtn);

            progressSection.appendChild(article);
        }

        function onDelete() {
            article.remove();
        }

        function onFinish() {
            div.remove();
            completeSection.appendChild(article);
        }

        function createElements(tag, text, className) {
            let elem = document.createElement(tag);
            elem.textContent = text;
            if (className) {
                elem.className = className;
            }

            return elem;
        }
    }
}