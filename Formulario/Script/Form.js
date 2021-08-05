
const d = document
const Form = () => {
    const $form = d.querySelector(".contact-form"),
            $inputs = d.querySelectorAll(".contact-form [required]")

    console.log($inputs);

    $inputs.forEach(input => {
        const span = d.createElement("span")
        span.id = input.name
        span.textContent = input.title
        span.classList.add("contact-form-error", "none" )
        input.insertAdjacentElement("afterend", span)
    })
    d.addEventListener("keyup", e => {
        if(e.target.matches(".contact-form [required]")){
            let input = e.target,
                pattern = input.pattern || input.dataset.pattern
            
            if(pattern){
                
                console.log("El input tiene patron");
            }
            if(!pattern){
                console.log("No tiene patron");
            }

            // console.log(input, pattern);
        }
    })
}


export default Form