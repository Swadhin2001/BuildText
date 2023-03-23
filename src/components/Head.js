import React from 'react'

export default function Head() {
  return (
    <div>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Bootstrap w/ Webpack</title>
    </head>
    <body>
        <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Click Here!</h1>
        <button className="btn btn-primary">Click Me</button>
        </div>
        <script src="./main.js"></script>
    </body>
    </div>
  )
}
