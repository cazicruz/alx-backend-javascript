class HolbertonCourse{
    constructor (name, length, student) {
        this._name = name;
        this._length = length;
        this._student = student;
    }

    set attr(_name){
        if (!String(_name)){
            console.error("Name must be a string");
        }
        if (!Number(this._length)){
            console.error("Length must be a number");
        }
        if (!Array.Array(this._student)){
            console.error(" Array must be an array");
        }
    }

}

man = new HolbertonCourse(12, we, ben);