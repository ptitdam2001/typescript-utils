/**
 * Add x days to given date
 * @param current
 * @param days
 * @returns
 */
export function addDays(current: Date, days: number): Date {
	const nbDayInMs: number = days * 24 * 3600 * 1000;
	return  new Date(current.getTime() + nbDayInMs);
}

/**
 * compare 2 dates, if first date is before the second one, it returns -1
 * else it returns 1. If they are strictly equals than the function returns 0
 * @param dateA
 * @param dateB
 * @returns
 */
export function compare(dateA: Date, dateB: Date): number {
	const dateAMs = dateA.getTime();
	const dateBMs = dateB.getTime();
	if (dateAMs > dateBMs) {
		return 1;
	} else if (dateAMs < dateBMs) {
		return -1;
	} else {
		return 0;
	}
}