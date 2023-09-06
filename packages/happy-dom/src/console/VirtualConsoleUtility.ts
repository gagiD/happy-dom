/**
 * Virtual console utility.
 */
export default class VirtualConsoleUtility {
	/**
	 * Stringifies a log entry message.
	 *
	 * @param message Message.
	 * @returns Stringified message.
	 */
	public static stringifyMessage(message: Array<string | object>): string {
		let output = '';
		for (const part of message) {
			if (typeof part === 'object' && (part === null || part.constructor.name === 'Object')) {
				try {
					output += JSON.stringify(part, null, 3);
				} catch (error) {
					output += '["Failed stringify object in log entry."]';
				}
			} else {
				output += String(part);
			}
		}
		return output;
	}
}
