import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './style.less'

const App = () => {
	return (
		<div className="page-container">Hello World</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('app'),
)
