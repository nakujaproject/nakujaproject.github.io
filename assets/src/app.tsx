import React from 'react'
import { createRoot } from 'react-dom/client'
import Teams from './components/teams'
import App from './components/navbar'
import Footer from './components/footer'

const teamDOM = document.getElementById('team')
if (teamDOM !== null) createRoot(teamDOM).render(<Teams />)

const navbarDOM = document.getElementById('navbar')
if (navbarDOM !== null) createRoot(navbarDOM).render(<App />)

const footerDOM = document.getElementById('footer')
if (footerDOM !== null) createRoot(footerDOM).render(<Footer />)
