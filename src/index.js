import style from './scss/style.scss';

const toggleForm = () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {

            buttons.forEach(x => {
                x.classList.remove('btn--active')
            })
            event.target.classList.add('btn--active')
            if(event.target.classList.contains('btn__signup')) {
                document.getElementById('logIn').classList.remove('active')
                document.getElementById('signUp').classList.add('active')
            } else if (event.target.classList.contains('btn__login')) {
                document.getElementById('signUp').classList.remove('active')
                document.getElementById('logIn').classList.add('active')
            }
        })
    })
}
toggleForm()

