import { User } from "./User";

export interface UserRepository {
	create(user: User): Promise<void>;
	findAll(): Promise<User[]>;
	findById(id: string): Promise<User>;
	findByAge(age: number): Promise<User[]>;
	findByName(name: string): Promise<User[]>;
	findByAgeAndName(age: number, name: string): Promise<User>;
	findByOccupation(occupation: ""): Promise<User[]>;
	// findBy...
}
