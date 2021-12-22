class User {
    id;
    name;
    email;
    password;

    User(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // User(name, email, password) {
    //     this.name = name;
    //     this.email = email;
    //     this.password = password;
    // }

    getId() {
        return this.id;
    }

    setID($id) {
        this.id = $id;
    }

}

export default User;