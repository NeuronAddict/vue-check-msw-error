import {http, HttpResponse} from 'msw'

const messages = [
    { id: 1, data: "Truc" }
]

export const restHandlers = [
    http.get('/api/v1/messages', () => {
        return HttpResponse.json(messages);
    }),
]
