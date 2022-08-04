import MyName from "./TextName"
function Welcome() {
    return (
        <div>welcome people
            <h5>
                <MyName name="dan"/>
                <MyName name="dani"/>
                <MyName name="yoni"/>
                <MyName name="nati"/>
                <MyName name="natan"/>
            </h5>
        </div>

        
    )
}
export default Welcome