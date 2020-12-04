import React, { Component } from 'react'
import CreateMail from './create-mail.component'
import Navbar from './navbar.component'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <CreateMail />
            </div>
        )
    }
}
