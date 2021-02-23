import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        return (  
            <div>
                <table className="table table-bordered">
                    <tbody>
                    {
                        Object.keys(this.props.emotions).map(key => 
                            <tr>
                                <th>{key}</th>
                                <th>{this.props.emotions[key]}</th>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
    
}
export default EmotionTable;
