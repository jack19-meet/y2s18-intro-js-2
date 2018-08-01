var person = {
    firstName : "jack",
    lastName : "bandak",
    age: 16,
    favoriteFoods : ["burgers", "pinapple"],
    image : "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    
}
person = JSON.stringify(person)
document.write(person)