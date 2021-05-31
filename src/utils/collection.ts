/**
 * Sort an array of objects
 * @param collection an array of element
 * @param key key to sort
 * @param order order of sort (by default asc)
 * @returns sorted collection
 */
export function sortBy<T, K extends keyof T>(collection:T[], key: K, order: 'asc'|'desc' = 'asc'): T[] {
	return collection.sort((a, b) => {
		if (a[key] === undefined || b[key] === undefined) return 0
		if (order === 'asc' && a[key] < b[key]) return -1
		if (order === 'asc' && a[key] > b[key]) return 1
		if (order === 'desc' && a[key] > b[key]) return -1
		if (order === 'desc' && a[key] < b[key]) return 1
		if (a[key] === b[key]) return 0

		return 0
	})
}