import React, {Component} from 'react';

class Test extends Component {

    render() {
        const {name} = this.props;

        return (
            <div>
                My first app
                {name}
            </div>
        )
    }
}

export default Test;