import React from 'react'

export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'Default parent state value',
    }

    /*
         Bind our childHandler function to this context
         that will get called from our Child component
        */
    this.childHandler = this.childHandler.bind(this)
  }

  /*
     Function that gets called when
     we bubble up our `return` from Child 
    */
  childHandler(dataFromChild) {
    // log our state before and after we updated it
    console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), 'color:orange')
    this.setState(
      {
        data: dataFromChild,
      },
      () => console.log('Updated Parent State:', this.state)
    )
  }

  render() {
    /*
         Set our childHandler function as a value to a prop that
         gets passed down to our Child component
        */
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
            Try it out!
          </div>
          <strong className="text-lg leading-6 font-medium text-gray-900">Parent Component</strong>
          <p className="px-4">
            Value:{' '}
            <strong>
              <span className="text-purple-600">{this.state.data} </span>
            </strong>
          </p>
          <Child action={this.childHandler} parentValue={this.state.data} />
        </div>
      </div>
    )
  }
}

// Child Class
export class Child extends React.Component {
  /*
      Our onClick event will return the function that gets set to our action prop
      that then gets passed into the Parent's childHandler function.
    */

  constructor(props) {
    super(props)
    this.state = {
      randomNumber: Math.floor(Math.random() * 999),
    }
    this.rand = this.rand.bind(this)
  }

  rand() {
    this.setState({ randomNumber: Math.floor(Math.random() * 999) })
  }

  render() {
    return (
      <div className="mt-5">
        <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
          <div className="sm:flex sm:items-start">
            <div className="sm:mt-0 sm:ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">Child Component</div>
              <div className="mt-1 text-sm leading-5 text-gray-600 sm:flex sm:items-center">
                <div>
                  Update Parent Value from{' '}
                  <strong>
                    <span className="text-purple-600">{this.props.parentValue}</span>
                  </strong>
                </div>
                <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                  &rarr;
                </span>
                <strong className="mt-1 sm:mt-0">
                  <span className="text-teal-600">{this.state.randomNumber}</span>
                </strong>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => {
                  this.props.action(this.state.randomNumber)
                  this.rand()
                }}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              >
                Update Parent
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
