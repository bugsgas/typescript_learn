export {}
//union types

 let someId: number | string

 someId = 1
 someId = 'string'

 let email: string | null = null

 email = 'mario@netninja.dev'
 email = null

 type Id = number | string
 let anotherId: Id

 anotherId = "asd12313"
 anotherId = 5

 //union type pitfall

 function swapIdType(id: Id): Id {
     //can only use props and methods common to
     //both number and string types
     // parseInt(id) --> not allowed
    //  parseInt(id)

     return id
}

swapIdType('5')