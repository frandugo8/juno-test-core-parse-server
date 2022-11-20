describe('Parse Server test', () => {
  // Parse.User.enableUnsafeCurrentUser();
  it('coverage for /login', async () => {
    const loginData = {
      username: "test",
      password: "test"
    }
  
    const { status } = await Parse.Cloud.httpRequest({
      url: 'http://localhost:8000/api/login',
      method: "POST",
      body: loginData
    });
  
    expect(status).toBe(200)
  });

  it('coverage for /signup', async () => {
    const signupData = {
      name: "test",
      surname: "test",
      username: "test",
      password: "test"
    }
  
    const { status } = await Parse.Cloud.httpRequest({
      url: 'http://localhost:8000/api/signup',
      method: "POST",
      body: signupData
    });

    expect(status).toBe(200)
  });
});