const form = document.querySelector("form")
const API_URL = "http://localhost:3000"

form.addEventListener("sumbit", e => {
    e.preventDefault()
    const formData = new FormData(form)

    console.log(formData.get("send-message"))
    form.reset()
})