import React, { Component } from 'react';



let teams = {
    TL: {
        name: 'Team Liquid',
        logo_url: process.env.PUBLIC_URL + 'img/teams/logos/Team_Liquid.png',
        players: [
            {
                name: 'm`iCKe',
                position: '1',
                flag_url: 'img/teams/flags/Sweden.png'
            }, {
                name: 'qojqva',
                position: '2',
                flag_url: 'img/teams/flags/Germany.png'
            }, {
                name: 'Boxi',
                position: '3',
                flag_url: 'uimg/teams/flags/Sweden.png'
            }, {
                name: 'Taiga',
                position: '4',
                flag_url: 'img/teams/flags/Norway.png'
            }, {
                name: 'PiNSaNiA',
                position: '5',
                flag_url: 'img/teams/flags/Sweden.png'
            }, {
                name: 'Blitz',
                position: 'c',
                flag_url: 'img/teams/flags/United_States.png'
            },
        ]
    },
    TS: {
        name: 'Team Secret',
        logo_url: process.env.PUBLIC_URL +  'img/teams/logos/Team_Secret.png',
    },


}


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


