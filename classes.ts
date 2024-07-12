class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = "Extrovert";
        } else if (answer === 2) {
            this.personality = "Introvert";
        } else {
            this.personality = "Mystery";
        }
    }

    public getPersonality(): string {
        return this.personality;
    }
}

class Student extends Person {
    private _name: string;

    constructor() {
        super();
        this._name = "";
    }

    public get Name(): string {
        return this._name;
    }
    public set Name(value: string) {
        this._name = value;
    }
}

export { Person }
export { Student }
