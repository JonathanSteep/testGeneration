const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

// Agregas usuarios
test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);

    userController.add(user);
    // Buscar por correo electronico
    const userEmail = userController.findByEmail("santiago@generation.org");
    expect(userEmail).toBe(user);
    // Buscar por Id
    const userId = userController.findById(1234);
    expect(userId).toBe(user);
  });


// Remover usuarios
test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });



