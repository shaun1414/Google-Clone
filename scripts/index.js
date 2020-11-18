const form = document.getElementById('search-form')

const redirect= (form)=>{
  form.preventDefault()
  console.log(form)
}

form.onsubmit  = redirect;