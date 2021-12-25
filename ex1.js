function Lesson(className , classUnit , classCapacity){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
}

const softEngineeringClass = new Lesson("softEgineering" , 3 , 50)
const networkClass = new Lesson("network" , 3 , 30)

softEngineeringClass.project = true
networkClass.book = true

console.log(JSON.stringify(softEngineeringClass))
console.log(JSON.stringify(networkClass))