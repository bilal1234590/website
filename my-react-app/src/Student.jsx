import propsType from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age:  {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>

        </div>
    )
}
Student.propsType = {
    name: propsType.string,
    age: propsType.number,
    isStudent: propsType.bool,
}
Student.defaultProps = {
    name: "Guest",
    age:  0,
    isStudent: false,
}
export default  Student