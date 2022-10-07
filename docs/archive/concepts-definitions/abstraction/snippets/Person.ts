export class Person {
	private readonly name: string;
	private readonly dateOfBirth: Date;

	constructor(dateOfBirth: Date, name: string) {
		this.dateOfBirth = dateOfBirth;
		this.name = name;
	}

	public walk() {}
	public run() {}
	public sleep() {}
}
