export default function ProfileSettings() {
    return (
        <>
            <h3>Profile Settings</h3>
            <form style={{maxWidth: '400px'}}>
                <label>
                    Display Name:<br />
                    <input type="text" defaultValue="believille" />
                </label>
                <br /><br />
                <label>
                    Email Notifications:<br />
                    <select>
                        <option>All</option>
                        <option>Important only</option>
                        <option>None</option>
                    </select>
                </label>
                <br /><br />
                <button type="button">Save Changes</button>
            </form>
        </>
        
    )
    
}