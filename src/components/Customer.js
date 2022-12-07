import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <img src="{this.props.image}" alt="profile"/>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;