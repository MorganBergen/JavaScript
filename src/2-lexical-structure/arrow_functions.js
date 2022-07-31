
class members {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }

}

function main() {

    let country_club = new members("morgan bergen", 24);
    console.log(country_club.getName())
    console.log(country_club.getAge())

    return (0);
}

let morgan = "Morgan";
const show = (x) => (x + " is my name");
console.log(show(morgan));