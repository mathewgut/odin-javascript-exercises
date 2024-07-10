const findTheOldest = function(people) {
    people.sort((person, nextPerson) => {
        // declarations

        let personDeath = 0;
        let nextPersonDeath = 0;
        let personBirth = person.yearOfBirth;
        let nextPersonBirth = nextPerson.yearOfBirth;
        
        // current person check
        // incase of death undefined, we replace with cureent year
        
        if (!person.yearOfDeath){
            personDeath = new Date().getFullYear();
        }else {
            personDeath = person.yearOfDeath;
        }

        // next person check
        
        if (!nextPerson.yearOfDeath){
            nextPersonDeath = new Date().getFullYear();
        }else {
            nextPersonDeath = nextPerson.yearOfDeath;
        }

        // sorting by comparing which age is larger so we know which name to return
        // oldest is first, youngest is last

        if(personDeath - personBirth > nextPersonDeath - nextPersonBirth){
            return -1;
        } else if (personDeath - personBirth == nextPersonDeath - nextPersonBirth) {
            return 0;
        } else {
            return 1;
        }

    })
    return people[0]
    };
// Do not edit below this line
module.exports = findTheOldest;
