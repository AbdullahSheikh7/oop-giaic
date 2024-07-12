class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
export { Person };
export { Student };
