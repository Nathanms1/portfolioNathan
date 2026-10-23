const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.toggle('open')
        trigger.setAttribute('aria-expanded', String(isOpen))
    })
})
