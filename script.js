var tl=gsap.timeline();

tl.from(".nav-item1 a",{
    y:-100,
    duration:1.5,
    delay:0.5,
    stagger:0.1,
})



tl.from(".poster_text h4",{
    x:100,
    opacity:0,
    duration:0.5,
    // rotate:360,
    // delay:2,


})

tl.from(".poster_text h2",{
    x:100,
    opacity:0,
    duration:0.5,
    // rotate:-180,
    // delay:2.2,

})

tl.from(".poster_text p",{
    x:400,
    opacity:0,
    scale:0.5,
    duration:1.5,
    // delay:2.9,   
})

tl.from("#demo",{
    x:100,
    opacity:0,
    duration:1.5,
})

tl.from(".PosterImg img",{
    x:1000,
    opacity:0,
    duration:1,
    rotate:-30
    // delay:4.5,
 
})

gsap.from(".product ",{
    opacity:0,
    x:200,
    scale:1.5,
    duration:3,
    stagger:1,
    scrollTrigger:{
        trigger:".product",
        scroller:"body",
        start:"top 60%",
        end:"end 5%",
        scrub:2,

    }
})

gsap.from(".Feature",{
    opacity:0,
    x:-1500,
    rotate:40,
    scale:1.1,
    duration:2,
    scrollTrigger:{
        trigger:".Feature",
        scroller:"body",
        start:"top 40%",
        end:"end 50%",

        scrub:2,


    }
})

gsap.from(".Feature2",{
    opacity:0,
    x:1500,
    rotate:-40,
    scale:1.1,
    duration:1.5,
    scrollTrigger:{
        trigger:".Feature2",
        scroller:"body",
        start:"top 40%",
        end:"end 50%",

        scrub:2,


    }
})

gsap.from(".brotate1",{
    opacity:0,
    x:-1000,
    rotate:40,
    scale:1.1,
    duration:1.5,
    scrollTrigger:{
        trigger:".brotate1",
        scroller:"body",
        start:"top 30%",
        end:"end 50%",
        scrub:2,


    }
})

gsap.from(".brotate",{
    opacity:0,
    x:1000,
    rotate:-40,
    scale:1.1,
    duration:1.5,
    scrollTrigger:{
        trigger:".brotate",
        scroller:"body",
        start:"top 30%",
        end:"end 50%",

        scrub:2,


    }
})
gsap.from(".product1",{
    opacity:0,
    x:200,
    scale:1.1,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:".product1",
        scroller:"body",
        start:"top 40%",
        end:"end 50%",

        scrub:2,

    }
})

gsap.from(".footer_one",{
    opacity:0,
    x:-200,
    scale:1.1,
    duration:1.5,
    scrollTrigger:{
        trigger:".footer_one",
        scroller:"body",
        start:"top 60%",
        end:"end 50%",

        overflow:"hidden",
        scrub:2,

    }
})

gsap.from(".footer_two",{
    opacity:0,
    scale:1.5,
    duration:1.5,
    scrollTrigger:{
        trigger:".footer_two",
        scroller:"body",
        start:"top 60%",
        end:"end 50%",
        overflow:"hidden",
        scrub:2,


    }
})


gsap.from(".footer_three",{
    opacity:0,
    x:200,
    scale:1.1,
    duration:1.5,
    scrollTrigger:{
        trigger:".footer_three",
        scroller:"body",
        start:"top 60%",
        end:"end 50%",
     
        scrub:2,


    }
})

gsap.from(".gsap",{
    opacity:0,
    scale:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".gsap",
        scroller:"body",
        start:"top 90%",
        end:"end 50%",

        scrub:2,

    }
})

gsap.from(".gsap1",{
    opacity:0,
    scale:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".gsap1",
        scroller:"body",
        start:"top 90%",
        end:"end 50%",
        scrub:2,

    }
})

gsap.from(".gsap2",{
    opacity:0,
    scale:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".gsap2",
        scroller:"body",
        start:"top 90%",
        end:"end 50%",
        scrub:2,

    }
})

gsap.from(".gsap3",{
    opacity:0,
    scale:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".gsap3",
        scroller:"body",
        start:"top 90%",
        end:"end 50%",

        scrub:2,

    }
})

gsap.from(".gsap4",{
    opacity:0,
    scale:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".gsap4",
        scroller:"body",
        start:"top 90%",
        end:"end 50%",

        scrub:2,
    }
})