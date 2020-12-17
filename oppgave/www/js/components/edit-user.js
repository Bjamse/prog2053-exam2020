import {LitElement, html, css} from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
    static get properties() {
        return {
            user: {type: Object}
        };
    }

    render() {
        if (this.user.uid == undefined){
            return html``;
        }
        return html`
            <form onsubmit="javascript: return false;" id="userForm" method="POST">
                <label for="uid">UNIQ id</label> <input id="uid" name="uid" value="${this.user.uid}">
                <br>    
                <label for="username">Username</label>
                    <input id="username" name="uname" type="text" value="${this.user.uname}">
                    <br>
                
                    <label for="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" value="${this.user.firstName}">
                <br>
                    <label for="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" value="${this.user.lastName}">
                <br>
                    <label for="oldpassword">Old Password</label>
                    <input type="password" id="oldpassword" name="oldpwd" type="text" value="">
                <br>
                    <label for="newpassword">New Password</label>
                    <input type="password" id="newpassword" name="pwd" type="text" value="">
                <br>
                <input type="submit" @click=${this.updateUsr} id="submitForm" name="editUser"
                       value="edituser">
            </form>
        `;
    }

    updateUsr(e) {
        const formData = new FormData(e.target.form);
        fetch('api/updateUser.php', {
            method: 'POST',
            body: formData
        }).then(res=>res.json())
            .then(data=>{
                data.status=='success' ?(console.log("success'")):console.log("no success'");
                window.location.href = window.location.pathname;
            })
    }



}

customElements.define('edit-user', EditUser);
