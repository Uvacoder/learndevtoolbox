import { Criteria } from "../../../../snippets/domain/criteria/criteria";
import { User } from "./User";

export interface UserRepository {
	create(user: User): Promise<void>;
	findAll(): Promise<User[]>;
	findMatching(criteria: Criteria): Promise<User[]>;
}
