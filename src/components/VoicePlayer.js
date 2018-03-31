/*  This was copied from react-voice-components because create-react-app
    would not load it as it has and unless one rejects create-react-app there is
    no access to the webpack.config.js.  So this was the solution.
*/


import React, { Component } from 'react'

class VoicePlayer extends Component {
  constructor (props) {
    super(props)

    if ('speechSynthesis' in window) {
      this.speech = this.createSpeech()
    } else {
      console.warn('The current browser does not support the speechSynthesis API.')
    }

    this.state = {
      started: false,
      playing: false,
      ending: false
    }
  }

  createSpeech = () => {
    const defaults = {
      text: '',
      volume: 1,
      rate: 1,
      pitch: 1,
      lang: 'en-US'
    }

    let speech = new SpeechSynthesisUtterance()

    Object.assign(speech, defaults, this.props)

    return speech
  }

  speak = () => {
    window.speechSynthesis.speak(this.speech)
    this.setState({ started: true, playing: true })
  }

  cancel = () => {
    window.speechSynthesis.cancel()
    this.setState({ started: false, playing: false })
  }

  pause = () => {
    window.speechSynthesis.pause()
    this.setState({ playing: false })
  }

  resume = () => {
    window.speechSynthesis.resume()
    this.setState({ playing: true })
  }

  // end = () => {
  //   window.speechSynthesis.end()
  //   this.setState({ ending: true, playing: false, started: false});
  // }

  componentWillReceiveProps ({ pause }) {
    if (pause && this.state.playing && this.state.started) {
      return this.pause()
    }

    if (!pause && !this.state.playing && this.state.started) {
      return this.resume()
    }
  }

  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    const events = [
      { name: 'start', action: this.props.onStart },
      { name: 'error', action: this.props.onError },
      { name: 'pause', action: this.props.onPause },
      { name: 'resume', action: this.props.onResume },
      // { name: 'end', action: this.props.onEnd }
    ]

    events.forEach(e => {
      this.speech.addEventListener(e.name, e.action)
    })

   /*
    this.speech.addEventListener('end', () => {
      this.setState({ started: false })
      this.end()
    })
    */

    if (this.props.play) {
      this.speak()
    }
  }

  componentWillUnmount () {
    this.cancel()
  }

  render () {
    return null
  }
}

export default VoicePlayer
