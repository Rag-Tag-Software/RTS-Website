document.addEventListener("DOMContentLoaded", function () { new SweetScroll({}); tsParticles.load("tsparticles", { fpsLimit: 60, particles: { number: { value: 30, density: { enable: !0, area: 800 } }, color: { value: "#ffffff" }, shape: { type: "polygon", polygon: { sides: 5 } }, opacity: { value: .5, random: !1, animation: { enable: !1, speed: 1, minimumValue: .1, sync: !1 } }, size: { value: 3, random: !0, animation: { enable: !1, speed: 19.18081918081918, minimumValue: .1, sync: !1 } }, links: { enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1 }, move: { enable: !0, speed: 4, direction: "none", random: !0, straight: !1, outMode: "out", attract: { enable: !1, rotateX: 600, rotateY: 1200 } } }, interactivity: { detectsOn: "canvas", events: { onHover: { enable: !1, mode: "grab" }, onClick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 400, links: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8 }, repulse: { distance: 200, duration: .4 }, push: { quantity: 4 }, remove: { quantity: 2 } } }, detectRetina: !0 }) }, !1);
