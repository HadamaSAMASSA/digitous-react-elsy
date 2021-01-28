import React from "react";

class Box extends React.Component {
    render() {
        const {color, icon, value, unit} = this.props;
        if(Box){

        }
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color: color, fontSize: 100}}>
                    {icon}
                </span>
                <p>{value} {unit}</p>
                <input type="range"></input>
            </div>
        )
    }
}

export default Box;