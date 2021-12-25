class Media {
    constructor(name,year){
    	this.name = name;
      	this.year = year;
    }
  	info(){
        let res = `name : ${this.name}  year : ${this.year}`
        return res
    }
}

//Book
class Book extends Media{
    constructor(name , year , publisher){
        super(name , year)
        this.publisher = publisher
    }

    info(){
        let res = `name : ${this.name}  year : ${this.year}  publisher : ${this.publisher}`
        return res
    }
}

//Film
class Film extends Media{
    constructor(name , year , imdb){
        super(name , year)
        this.imdb = imdb
    }

    info(){
        let res = `name : ${this.name}  year : ${this.year}  imdb : ${this.imdb}`
        return res
    }
}

//Game
class Game extends Media{
    constructor(name , year , ageLimit){
        super(name , year)
        this.ageLimit = ageLimit
    }

    info(){
        let res = `name : ${this.name}  year : ${this.year}  ageLimit : ${this.ageLimit}`
        return res
    }
}

//create obj book
const book1 = new Book("Anne Shirley" , 1880 , "Victoria")
console.log(book1.info())

//create obj film
const film1 = new Film("James Bond" , 2021 , 8)
console.log(film1.info())

//create obj game
const game1 = new Game("Angry Birds" , 2000 , 14)
console.log(game1.info())