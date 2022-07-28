const engineer = require('./engineer');

class engineer extends emplo {
    constructor(name, title, id, email, github) {
        super(title, id, email)
        this.github = github; 
    }
    getGithub() {
        return this.github
    }
    getTitle() {
        return "engineer";
    }
}

module.exports = Engineer 