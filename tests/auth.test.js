const request = require('supertest');
const { app, server } = require('../index'); // Import your Express app

describe('User Authentication API', () => {
    afterAll(() => {
        server.close();
    });
    let token; // This variable will hold the token for authenticated requests
    let email = 'test12312312321' + '@example.com'
    // Test user signup
    it('should sign up a new user', async () => {
        const response = await request(app)
            .post('/api/signup')
            .send({
                name: 'Test User',
                email: email,
                password: 'testpassword',
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('email');
        token = response.body.token; // Save the token for future requests
    });

    // Test user signin
    it('should sign in an existing user', async () => {
        const response = await request(app)
            .post('/api/signin')
            .send({
                email: email,
                password: 'testpassword',
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
        token = response.body.token; // Update the token for future requests
    });

    // Test protected route
    // it('should access a protected route with a valid token', async () => {
    //     const response = await request(app)
    //         .get('/protected-route')
    //         .set('Authorization', `Bearer ${token}`);

    //     expect(response.statusCode).toBe(200);
    //     // Add more assertions as needed
    // });

    // Test signout
    it('should sign out a user', async () => {
        const response = await request(app).get('/api/signout');

        expect(response.statusCode).toBe(200);
        // Add more assertions as needed
    });

    // Add more tests for isAuthenticated, isAdmin, and other scenarios

    // Example for testing isAuthenticated middleware
    // it('should deny access if user is not authenticated', async () => {
    //     const response = await request(app)
    //         .get('/protected-route')
    //         .set('Authorization', 'Bearer invalidtoken');

    //     expect(response.statusCode).toBe(403);
    //     // Add more assertions as needed
    // });

    // Example for testing isAdmin middleware
    // it('should deny access if user is not an admin', async () => {
    //     // Sign in a non-admin user or use a user without admin privileges
    //     // ...

    //     const response = await request(app)
    //         .get('/admin-route')
    //         .set('Authorization', `Bearer ${token}`);

    //     expect(response.statusCode).toBe(403);
    //     // Add more assertions as needed
    // });




});


