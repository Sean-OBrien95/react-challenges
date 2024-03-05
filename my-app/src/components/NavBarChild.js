import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <form>
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username"></input>
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password"></input>
                            <button onClick={props.handleSignOut}>Submit</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <button onClick={props.handleSignIn}>Sign In</button>
                    </div>
                )
            }
        </div>
    )
}

export default NavBarChild