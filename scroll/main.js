gsap.from('section', .5, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: 'section',
        start: 'top center',
        // toggleActions: 'play none none reverse'

    }
})