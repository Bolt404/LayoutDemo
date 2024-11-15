export class Otter {
    private name: string;
    private born: Date;

    public constructor (name: string, born: Date){
        this.name = name;
        this.born = born;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public getBorn(): Date {
        return this.born;
    }
}