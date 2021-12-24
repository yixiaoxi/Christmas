// Inspired by https://tenor.com/view/merry-christmas-gif-10654655?utm_source=share-button&utm_medium=Social&utm_content=pinterest

let merryChristmas = [document.getElementsByClassName('merrychristmas'), document.getElementsByClassName('christmas')]
let snowFlake = document.getElementsByClassName('snowflake')
let bell = document.getElementsByClassName('bell')

var tl = gsap.timeline({repeat: -1});
var tl2 = gsap.timeline({repeat: -1});
var tl3 = gsap.timeline({repeat: -1});
let neonLetters = 'neonAnim 1s alternate infinite'

let filters1 = 'drop-shadow(0px 0px 3px #fff) drop-shadow(0px 0px 5px #2d92ff) drop-shadow(0px 0px 7px #56a8ff) drop-shadow(0px 0px 10px #94c8ff)';
let filters2 = 'drop-shadow(0px 0px 1px #E1c225) drop-shadow(0px 0px 1px #E1c225) drop-shadow(0px 0px 1px #E1c225) drop-shadow(0px 0px 1px #E1c225)'


tl.to(snowFlake[0], {stroke: '#94c8ff', filter: filters1, stagger: .5, duration: .3})
.to(snowFlake[0], {stroke: '#717171', filter: 'none', stagger: .5, duration: .3})
.to(snowFlake[1], {stroke: '#94c8ff', filter: filters1, stagger: .5, duration: .3})
.to(snowFlake[1], {stroke: '#717171', filter: 'none', stagger: .5, duration: .3})
.to(snowFlake[2], {stroke: '#94c8ff', filter: filters1, duration: .3})
.to(snowFlake[2], {stroke: '#717171', filter: 'none', duration: .3})

tl2.to(bell[1], {stroke: '#e1c225', filter: filters2, stagger: .5, duration: .3})
.to(bell[1], {stroke: '#717171', filter: 'none', stagger: .5, duration: .3})
.to(bell[2], {stroke: '#e1c225', filter: filters2, stagger: .5, duration: .3})
.to(bell[2], {stroke: '#717171', filter: 'none', stagger: .5, duration: .3})
// .to(bell[1], {})

merryChristmas.forEach(a => {
    tl3.to(a,{animation: neonLetters, color: '#D2042D', duration: .4})
    .to(a,{animation: neonLetters, color: '#D2042D', duration: 1})
    .to(a, {animation: '', color: '#858585', duration: .2})
})
