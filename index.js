
function exerciseDog(dogName, dogBreed) {
    const completeRoutine = []
    routine.forEach (activity => {
        let thingToDo = activity(dogName, dogBreed)
        completeRoutine.push(thingToDo)
    });
    return completeRoutine;
}


function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
}

function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`
    console.log(leash);
    return leash;
}

function walkToPark(dogName, dogBreed) {
    const walkTo = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walkTo);
    return walkTo;
}

function throwFrisbee(dogName, dogBreed) {
    const throwFris = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throwFris);
    return throwFris;
}

function walkHome(dogName, dogBreed) {
    const walkHomeDog = `Walk home with ${dogName} the ${dogBreed}`
    console.log(walkHomeDog);
    return walkHomeDog;
}

function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash);
    return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

