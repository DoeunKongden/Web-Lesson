let text = '{"name":"John", "age":30, "car":null}'

let obj = JSON.parse(text) //converting the json data stored in Text variable into object
console.log(obj)
console.log(obj.name)