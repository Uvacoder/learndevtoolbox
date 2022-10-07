import { InvalidArgumentError } from "./InvalidArgumentError";

export type Primitives = String | string | number | Boolean | boolean | Date;

export abstract class ValueObject<Type extends Primitives> {
	readonly value: Type;

	constructor(value: Type) {
		this.value = value;
		this.ensureValueIsDefined(value);
	}

	private ensureValueIsDefined(value: Type): void {
		if (value === null || value === undefined) {
			throw new InvalidArgumentError("Value must be defined");
		}
	}

	equals(other: ValueObject<Type>): boolean {
		return (
			other.constructor.name === this.constructor.name &&
			other.value === this.value
		);
	}

	toString(): string {
		return this.value.toString();
	}
}
