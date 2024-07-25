const CreateAccForm = () => {
    return(
        <form className="flex flex-col">
            Get started.

            <label htmlFor="fullname"> Full Name</label>
            <input type="text" id="fullname" name="fullname"/>

            <label htmlFor="dob"> Date of birth</label>
            <input type="text" id="dob" name="dob"/>

            <label htmlFor="gender"> Gender</label>
            <select id="gender" name="gender">
                <option value="" disabled> Select one</option>
                <option value="male"> Male</option>
                <option value="female"> Female</option>
            </select>

            <label htmlFor="email"> Email address</label>
            <input type="email" id="email" name="email"/>

            <label htmlFor="number"> Phone number</label>
            <div className="flex">
                <select id="numPrefix" name="numPrefix">
                    <option value="ghana"> Ghana</option>
                    <option value="usa"> USA</option>
                    <option value="nigeria"> Nigeria</option>
                </select>
                <input type="number" id="number" name="number"/>
            </div>

            <label htmlFor="password"> Password</label>
            <input type="password" id="password" name="password"/>
        </form>
    )
}
export default CreateAccForm;