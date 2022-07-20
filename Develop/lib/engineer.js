const employee = require('./employee');

class engineer extends employee {
    constructor(name, title, id, email, github) {
        super(title, id, email)
        this.github = github; 
    }
    getGithub() {
        return this.github
    }
    getTitle() {
        return 'engineer';
    }
}

module.exports = engineer 