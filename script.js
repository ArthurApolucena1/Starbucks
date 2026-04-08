gsap.registerPlugin(SplitText)

const lataMenores = document.querySelectorAll(".latas img:nth-child(2)")
const slides = document.querySelectorAll(".slide")

let clicar = true;
let contador = 0;

lataMenores.forEach(lataMenor => {
    lataMenor.onclick = () => {

        if (clicar) {
            clicar = false
            const slideAtivo = document.querySelector(".slide.ativo");
            slideAtivo.classList.remove("ativo");
            if (contador == 3) {
                contador = 0
            } else {
                contador = contador + 1;
            }

            slides[contador].classList.add("ativo");
            animarTitulo();

            setTimeout(() =>{
                clicar = true
            }, 1000);
        }
    };
    animarTitulo()
});



function animarTitulo() {
    const split = SplitText.create(".slide.ativo h2", {
        type: "chars",
        mask: "chars"
    })

    gsap.from(split.chars, {
        y: "100%",
        duration: .5,
        stagger: .06,
        delay: .5,
    })
}