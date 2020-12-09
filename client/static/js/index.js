const form = document.querySelector("form")

form.addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(form)

    console.log(formData.get("send-message"))
    form.reset()
})