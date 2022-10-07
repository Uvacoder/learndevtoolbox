abstract class Animal {
	protected readonly dateOfBirth: Date;

	constructor(dateOfBirth: Date) {
		this.dateOfBirth = dateOfBirth;
	}

	public abstract run(): void;

	public sleep() {
		// Implement the common logic for sleep
	}
}
