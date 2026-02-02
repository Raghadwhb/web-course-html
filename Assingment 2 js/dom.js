const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('#my-form').style.backgroundColor = 'red';

    document.body.classList.add('bg-dark');

    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

    btn.style.backgroundColor = 'orange';
});
