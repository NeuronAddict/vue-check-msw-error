import {afterAll, afterEach, beforeAll, beforeEach} from 'vitest'
import {setupServer} from 'msw/node'
import {restHandlers} from "./src/mocks/handlers";

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({
    onUnhandledRequest: 'error',

}))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => {
    server.resetHandlers();
})

server.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted:', request.method, request.url)
});
