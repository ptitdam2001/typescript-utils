import { sortBy } from "./collection"

describe('Collection utils', () => {
	describe('sortBy', () => {
		it('orders an array of object ascending (by default) and in function of key', () => {
			const myArray = [
				{id: 450},
				{id: 1},
				{id: 250}
			]

			expect(sortBy(myArray, 'id')).toEqual([
				{id: 1},
				{id: 250},
				{id:450}
			])
		})

		it('orders an array of object descending and in function of key when order is "desc"', () => {
			const myArray = [
				{id: 450},
				{id: 1},
				{id: 250}
			]

			expect(sortBy(myArray, 'id', 'desc')).toEqual([
				{id: 450},
				{id: 250},
				{id:1}
			])
		})
	})
})