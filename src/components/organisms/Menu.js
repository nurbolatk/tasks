import React from 'react'
import classnames from 'classnames'

const MenuItem = ({ Icon, colorBox, active, text, badge, onItemClick }) => {
  const itemClass = classnames([
    'menu-nav-list-item',
    {
      'menu-nav-list-item-active': active,
    },
  ])
  return (
    <button className={itemClass} onClick={onItemClick}>
      {Icon && <Icon className="menu-nav-list-item-icon" />}
      {colorBox}
      <span className="menu-nav-list-item-text">{text}</span>
      {badge && <span className="menu-nav-list-item-badge">{badge}</span>}
    </button>
  )
}

const MenuNav = ({ title, headerButton, children }) => {
  return (
    <nav className="menu-nav">
      <h4 className="menu-nav-header p-4 d-flex align-center">
        {title} {headerButton}
      </h4>
      <div className="menu-nav-list">{children}</div>
    </nav>
  )
}

const Menu = ({ children }) => {
  return <div className="menu">{children}</div>
}

Menu.Item = MenuItem
Menu.Nav = MenuNav

export default Menu
