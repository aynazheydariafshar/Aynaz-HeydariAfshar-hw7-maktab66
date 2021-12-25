class Media {
    constructor(name,year){
    	this.name = name;
      	this.year = year;
    }
  	info(){
        let res = `name : ${this.name}  year : ${this.year}`
    	return res;
    }
}

//Book
class Book extends Media{
    constructor(name , year , publisher){
        super(name , year)
        this.publisher = publisher
    }

    info(){
        super()
        res += `publisher : ${this.publisher}`
    }
}

//Film
class Film extends Media{
    constructor(name , year , imdb){
        super(name , year)
        this.imdb = imdb
    }

    info(){
        super()
        res += `imdb : ${this.imdb}`
    }
}