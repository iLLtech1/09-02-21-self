// Start

  // function Mage(name, age, power) {
  //   this.name = name
  //   this.age = age
  //   this.power = power
  //   this.casting = function() {
  //     console.log(`Poof! You are now a Eagle! My power is ${this.power}`)
  //   }
  // }

  // function Wizard (name, age , power, aggression) {
  //   Mage.call(this, name, age, power)
  //   this.aggression = aggression
  // }

  // const mage1 = new Mage('Gandolf', 200, 'Shape Caster', '1%')

  // const mage2 = new Mage('Damion', 5000, 'Lightening', '100%')

  // console.log (mage1,mage2)

//  end 

// start

const dog = (name,age, breed) => ({
  name,
  age,
  breed,
  bark () {
    console.log(`Woof! My name is ${this.name}`)
  }
})

const chihuahua = (name, age, breed, aggression) => ({ ...dog(name,age, breed), aggression })

const dog1 = chihuahua('Beef', 2, 'chihuahua', '15%')

console.log(dog1)
dog1.bark()

// end

