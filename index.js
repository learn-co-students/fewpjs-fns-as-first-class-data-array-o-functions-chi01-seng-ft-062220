function wakeDog(dogName, dogBreed){
    //console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
  }


function leashDog(dogName, dogBreed) {
    //console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`;
  }

  function walkToPark(dogName, dogBreed) {
    //console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }

  function throwFrisbee(dogName, dogBreed) {
    //console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }

  function walkHome(dogName, dogBreed) {
    //console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`;
  }

  function unleashDog(dogName="Byron", dogBreed="poodle") {
    //console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`;
  }
  
  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]


//   function exerciseDog(dogName, dogBreed) {
//       console.log(wakeDog());
//       console.log(leashDog());
//       console.log(walkToPark());
//       console.log(throwFrisbee());
//       console.log(walkHome());
//       console.log(unleashDog());
//   }

function exerciseDog(dog, breed){
    //return routine.map(function:(dogName: dog, dogBreed: breed));
    //return routine.map(fn: (dogname?: string, dogBreed?: string) => string);
    // return routine.map((fn) => {
    //     return fn(dog, breed)
    // });
    return routine.map(fn =>fn(dog, breed));
}
//fn before the block wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog
//=> fn in the block fn(dog, breed) ~~ wakeDog(dogName, dogBreed)