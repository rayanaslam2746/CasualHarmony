import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Keep a record of the error for debugging.
    console.error('ErrorBoundary caught an error:', error, info)
    this.setState({ info })
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <div className="min-h-screen bg-black text-white">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-20 text-center">
            <h1 className="text-3xl font-semibold">Something went wrong.</h1>
            <p className="text-base text-white/70">
              The app encountered an error while rendering. Please check the console for details.
            </p>
            <pre className="max-h-[50vh] overflow-auto rounded-none border border-white/10 bg-white/5 p-4 text-left text-sm text-white">
              {String(error)}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
