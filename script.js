var nav_bar = document.getElementById("navbar")
var nav_bar_state = 'row'

function resize_nav_bar() {
    nav_bar.classList.remove('col')
    nav_bar.classList.add("row")

    if (nav_bar.offsetHeight > max_height) {

        nav_bar.classList.remove('row')
        nav_bar.classList.add("col")

        let texts = nav_bar.children
        for (let i = 0; i < texts.length; i++) {
            if (texts[i].id == 'nav_bar_collapse') {
                continue;
            }
            texts[i].style.transitionDuration = "0s"

        }

        setTimeout(() => {
            let texts = nav_bar.children
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].id == 'nav_bar_collapse') {
                    continue;
                }
                texts[i].style.transitionDuration = "1s"
            }
        }, 10)

        if (nav_bar_state === 'row') {
            hide_all(true)
        }

        nav_bar_state = 'col'

        return
    }
    if (nav_bar_state === 'col') {
        collapse.classList.remove('active')
        hide_all(false)
    }

    nav_bar_state = 'row'

}

window.addEventListener('resize', function () {

    resize_nav_bar()


})

function hide_all(hide) {
    let texts = nav_bar.children
    if (texts[0].classList.contains("hide") && hide) return;
    for (let i = 0; i < texts.length; i++) {
        if (texts[i].id == 'nav_bar_collapse') {
            continue;
        }
        if (hide) {
            texts[i].classList.add("hide")
        }
        else {
            texts[i].classList.remove("hide")
        }
    }
}
for (i = 0; i < 5; i++) {
    let new_s = document.createElement('span')
    new_s.innerText = `Texto ${i}`
    nav_bar.appendChild(new_s)
}

var collapse = document.createElement('span')
collapse.innerText = `Collapse`
collapse.id = "nav_bar_collapse"
collapse.addEventListener('click', () => {
    hide_all(collapse.classList.contains('active'))
    if (collapse.classList.contains('active')) {
        collapse.classList.remove('active')
        return
    }
    collapse.classList.add('active')
})
nav_bar.appendChild(collapse)

nav_bar.classList.add("max")
nav_bar.classList.add("row")

var max_height = nav_bar.offsetHeight + 1
console.log(max_height)

nav_bar.classList.remove("max")

resize_nav_bar()