import React from 'react'
import { render } from 'react-dom'
import Teams from './components/teams'
 
const teamDOM = document.getElementById('team')
if (teamDOM !== null) render(<Teams />, teamDOM)

 