const logoutUser = (req, res) => {
    res.json({
        message: 'Logout successfully!!',
        loggedOut: true
    })
}

export default logoutUser