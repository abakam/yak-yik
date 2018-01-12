import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
    constructor() {
        super();
        this.state = {
            zone: {
                name:'',
                zipCode: ''
            },
            zones : []
        }
    }

    componentDidMount(){
        console.log('component did mount');
        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if(err){
                alert('Error: ' + err);
                return; 
            }
            let list = response.body.results;
            this.setState({
                zones: list
            })
        });
    }

    updateZone(e){
        console.log(e.target.id + ": " + e.target.value);
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[e.target.id] = e.target.value;
        this.setState({
            zone: updatedZone
        });
    }

    addZone(){
        let updatedZones = Object.assign([], this.state.zones);
        console.log(JSON.stringify("Add Zone: " + this.state.zone))
        updatedZones.push(this.state.zone);
        this.setState({
            zones: updatedZones
        })
    }

    render() {
        var zoneList = this.state.zones.map((zone, i) => <li key={i}><Zone zone={zone} /></li>);
       return(
        <div>
            <ol>
                {zoneList}
            </ol>
            <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/> <br />
            <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" /> <br />
            <button className="btn btn-danger" onClick={this.addZone.bind(this)}>Add Zone</button>
        </div>
       );
    }
}

export default Zones