export class Person extends Animal {
	private name: string;

	constructor(dateOfBirth: Date, name: string) {
		super(dateOfBirth);
		this.name = name;
	}

	public walk() {
		// Implement walk
	}

	public run() {
		// Implement how a person runs
	}
}
