import { addDays } from "./date"

describe('Date utils', () => {
	describe('addDays', () => {
		it('add a specific number of days to given date', () => {
			const myDate = new Date('2020-05-01')
			const newDate = addDays(myDate, 7)

			expect(newDate).toEqual(new Date('2020-05-08'))
		})

		it('removes number of days to given date when second parameter is negative', () => {
			const myDate = new Date('2020-05-01')
			const newDate = addDays(myDate, -7)

			expect(newDate).toEqual(new Date('2020-04-24'))
		})
	})
})