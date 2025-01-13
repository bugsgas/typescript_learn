export {};
//tuples

let person: [string, number, boolean] = ['mario', 30, true]

//tuples examples

let hsla: [number, string, string, number] 
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [100, 200]

function useCoords(): [number, number] {
    //get coorrds

    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoords()

//named tuples

let user: [name: string, age: number]

user = ['peach', 20]
console.log(user[1])