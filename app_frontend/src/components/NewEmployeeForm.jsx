const NewEmployeeForm = () => {
    return(
        <div>
            <h1>Add Employee:</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text"></input>
                <label htmlFor="empId">EmployeeID: </label>
                <input id="empId" type="text"></input>
                <label htmlFor="address">Address: </label>
                <input id="address" type="text"></input>
                <label htmlFor="contact">Contact: </label>
                <input id="contact" type="text"></input>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text"></input>
                <button>Add Employee</button>
            </form>
        </div>
    )
}

export default NewEmployeeForm