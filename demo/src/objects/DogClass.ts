export class DogClass {
    private race: string;
    private age: number;

    public constructor (race: string, age: number) {
        this.race = race;
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public getRace(): string {
        return this.race;
    }
}