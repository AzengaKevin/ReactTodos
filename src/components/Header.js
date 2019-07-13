import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <span className="navbar-brand">Todo List App</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="globalNav">
                    <ul className="nav navbar-nav">
                        <li className="nav-item"> <a className="nav-link" href="">Home</a></li>
                        <li className="nav-item"> <a className="nav-link" href="">Todos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
