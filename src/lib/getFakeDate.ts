import { faker } from '@faker-js/faker'
export default new Date(faker.date.recent()).toISOString()
