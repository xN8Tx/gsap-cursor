import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', (e) => {
    const body = document.querySelector('body');
    
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    body.addEventListener('mousemove', (e) => {
        let clientX = e.pageX
        let clientY = e.pageY
        
        // console.log(clientX + ' ' + clientY);
        let request = requestAnimationFrame(updateMe);
        function updateMe() {
            let dx = clientX - cx;
            let dy = clientY - cy;
            let tiltx = dy / cy;
            let tilty = dx / cx;
            let translateX = dy / 100;
            let translateY = dx / 100;
            let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
            let degree = radius * 10;
    
            gsap.to('.background>img', { transform: `translate(${translateX}px, ${translateY}px)`})
            gsap.to('.concept__card', { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`})
            gsap.to('.concept__text', { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`})
        }
    })
})

