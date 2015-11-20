import React from "react"
import {Hello} from "./hello.js"

export class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <Hello text="Hello World" />
      </div>
    )
  }
}
