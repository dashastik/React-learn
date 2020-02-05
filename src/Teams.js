import React, { Component } from 'react';
import teams from './TeamsObject';






class Teams extends Component {
    render() {
        return (
            <div>
                <p>{teams[this.props.team].name}</p>
                <img src={teams[this.props.team].logo_url} alt={'Logo'}/>
            </div>
        );
    }
}

export default Teams;


