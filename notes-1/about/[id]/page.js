export default function AboutWithId({params}) {
    return (
      <div>this is the about page with ID {params.id}</div>
    )
}

//localhost:3000/about/i
//i=1,2,3,4,5,6.....
 //this is the about page with ID 1,2,3...