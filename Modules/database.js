const fs = require("fs/promises")
const path = require("path")

module.exports = class Database {
    constructor() {
        this.filePath = path.join(__dirname, "..", "database.json")
        this.data = [];
        this.readFile()
    }

    async readFile() {
        let data = await fs.readFile(this.filePath, "utf-8")
        data = await JSON.parse(data)
        this.data = data.data
        return data.data
    }

    async addUser(name, number, course, source, paid) {
        const newData = {
            id: (this.data.length - 1) + 1,
            name: name,
            number: number,
            course: course,
            source: source
        }

        this.data.push(newData)

        await fs.writeFile(this.filePath, JSON.stringify({
            data: this.data
        }))

        return newData 

    } 

    async deleteStudent(id){
        let data = await this.readFile()
        let filtered =  data.filter( (e) => e.id != id)
        await fs.writeFile(
            this.filePath,
            JSON.stringify({
                data: filtered
            })
        )
    }

    // async find(name) {
    //     const newArray = []
    //     let names = await this.readFile()
    //     names.filter(element => {
    //         if(element["name"].includes(name)){
    //             // console.log(element);
    //             newArray.push(element)
    //             return newArray
    //         }
    //     })
    // }
}