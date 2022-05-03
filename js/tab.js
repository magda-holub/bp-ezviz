function toggle(e){
    let button = e.target;
    let divId = button.dataset.targetId;
    let div = document.getElementById(divId);
    let tabCards = document.querySelectorAll('.alza-tab--content');
    let tabs = document.querySelectorAll('.alza-tab')

    tabCards.forEach(card => {
        card.classList.remove('alza-tab--content__shown');
    });

    div.classList.add('alza-tab--content__shown')

    tabs.forEach(tab => {
        tab.classList.remove('alza-tab__active')
    })

    button.classList.add('alza-tab__active')
}