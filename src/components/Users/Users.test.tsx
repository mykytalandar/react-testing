import { render, screen } from '@testing-library/react';
import { Users } from './Users';
import axios from 'axios';

type TestResponse = {
    id: number,
    username: string,
    email: string,
};

jest.mock('axios');

describe("Users", () => {
    let response: { data: TestResponse[] };

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                },
                {
                    "id": 2,
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                },
                {
                    "id": 3,
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                }
            ]
        }
    });

    it("renders users list", async () => {
        jest.mocked(axios.get).mockResolvedValue(response);
        render(<Users />)

        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    });
});