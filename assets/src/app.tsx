import React from 'react'
import { render } from 'react-dom'
import Teams from './components/teams'
import App from './components/navbar'
 
const teamDOM = document.getElementById('team')
if (teamDOM !== null) render(<Teams />, teamDOM)

const navbarDOM = document.getElementById('navbar')
if (navbarDOM !== null) render(<App />, navbarDOM)
