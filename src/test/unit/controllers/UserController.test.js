import httpMocks from 'node-mocks-http';
import userFixture from '../../fixtures/userFixture';
import userService from '../../../services/userService';
import userController from '../../../controllers/userController';

describe('User controller', () => {
    const functions = Object.keys(userController);

    test('It should contain all functions.', async () => {
        expect(functions).toContain('createUser');
        expect(functions).toContain('saveUserHobbies');
        expect(functions).toContain('getUserHobbies');
        expect(functions).toContain('deleteUserHobby');
    });

    test('Create user testcase.', async () => {
        const res = httpMocks.createResponse();
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/api/register',
            body: {
                name: 'Mashood Rafi'
            },
        });

        const getCreatedUser = jest.spyOn(userService, 'createUser');
        const mockUser = userFixture.getCreatedUser();
        getCreatedUser.mockReturnValue(mockUser);

        const result = await userController.createUser(req, res);
        const data = res._getJSONData();

        expect(data.status).toBe(200);
        expect(result.statusCode).toBe(200);
        expect(data.userId).toBe("63399e93842644143dda61fa");
        getCreatedUser.mockRestore();
    });
});
