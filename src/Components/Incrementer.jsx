import React, { Component } from 'react'


class Incrementer extends Component {
    constructor(props) {
        super(props);
        this.state = {n: props.start, timer: null};
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)

    }
    componentDidMount() {
        this.play()
    }
    componentWillUnmount() {
        // this.pause()
        window.clearInterval(this.state.timer)
    }

    increment() {
        this.setState((state, props) => ({n: state.n + props.step}))
    }

    // Arrêter
    pause() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }
    // Démarrer
    play() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }
    // Changer le bouton
    toggle() {
        return this.state.timer ? this.pause() : this.play()
    }

    label() {
        return this.state.timer ? 'Pause' : 'Lecture'
    }
    // Réinitialiser
    reset () {
        this.pause()
        this.play()
        this.setState((state, props) => ({n: props.start}))
    }

    render() {
        return <div>
            valeur : {this.state.n}
            <button className='btn btn-success ms-3' onClick={this.toggle}>{this.label()}</button>
            <button className='btn btn-danger ms-3' onClick={this.reset}>Réinitialiser</button>
        </div>
    }

}

Incrementer.defaultProps = {
    start: 0,
    step: 1
};

export default Incrementer;
