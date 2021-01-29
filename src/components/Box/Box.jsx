import React from "react";

class Box extends React.Component {
    render() {
        const {color, icon, value, unit, min, max, onChange} = this.props;
        if(unit === "L"){
            return(
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{color: color, fontSize: 100}}>
                        {icon}
                    </span>
                    <p>{value} {unit}</p>
                </div>)
        }else{
            return (
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{color: color, fontSize: 100}}>
                        {icon}
                    </span>
                    <p>{value} {unit}</p>
                    <input type="range" min={min} max={max} value={value} onInput={onChange}/>
                </div>
            )
        }
        
    }
}

export default Box;