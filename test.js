const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';

console.log(personObj)

// function types:
function data(){

}


const data1 = function(){

}


const data2 = () => {

}


var profileDataArgs = process.argv.slice(2, process.argv.length);





const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
  };


printProfileData(profileDataArgs);