class EventHandler {
	constructor(
		private readonly event: Event,
		private readonly userRepository: any
	) {}

	public handle(): void {
		this.userRepository.findById(this.event.target);
	}
}
