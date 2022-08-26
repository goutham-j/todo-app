import React, {Component} from 'react'
import './Counter.css'

class Counter extends Component {

    constructor() {

        super()
        this.state = {
            counter: 0
        }
        this.calculate = this.calculate.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
          <div className='Counter'>
            <div>
                <button onClick={() => this.calculate(+1)}>+1</button>
                <button onClick={() => this.calculate(-1)}>-1</button>
            </div>
            <div>
                <button onClick={() => this.calculate(+5)}>+5</button>
                <button onClick={() => this.calculate(-5)}>-5</button>
            </div>
            <div>
                <button onClick={() => this.calculate(+10)}>+10</button>
                <button onClick={() => this.calculate(-10)}>-10</button>
            </div>
            <span className="count">{this.state.counter}</span>
            <div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
          </div>
        )
    }

    calculate(by) {
        this.setState ({
            counter: this.state.counter + by
        })
    }

    reset() {
        this.setState ({
            counter: 0
        })
    }
}

export default Counter