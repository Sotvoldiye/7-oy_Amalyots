// imges import
// import sidbarLogo from "../../images"

import {NavLink } from "react-router-dom"
import style from "./_sidbar.module.scss"
function Sidebar() {
  // const handleCliclk{

  // }
  return (
    <div className={style.bgColor}>
  <div className={style.saidbar}>
     <div className={style.saidbar_logo}>
     <img  src="./images/logo-large.svg" alt="" />
     </div>
     <div className={style.sidebar_Navigation}>
     <NavLink
          to="/"
          className={({ isActive }) =>
            `${style.Link} ${
              isActive ? style.activeNavItem : style.noActive
            }`
          }
        >
          {({ isActive }) => (
            <div className={style.baritem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="19"
                viewBox="0 0 18 19"
                width="18"
                fill={isActive ? "#277C78" : "#b3b3b3"}
              >
                <path d="m18 8.59282v8.66718c0 .3978-.158.7794-.4393 1.0607s-.6629.4393-1.0607.4393h-3.75c-.3978 0-.7794-.158-1.0607-.4393s-.4393-.6629-.4393-1.0607v-3.75c0-.1989-.079-.3897-.2197-.5303-.1406-.1407-.3314-.2197-.5303-.2197h-3c-.19891 0-.38968.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303v3.75c0 .3978-.15804.7794-.43934 1.0607s-.66284.4393-1.06066.4393h-3.75c-.39782 0-.779356-.158-1.06066-.4393-.281305-.2813-.43933998-.6629-.43933998-1.0607v-8.66718c-.00003156-.20761.04303048-.41295.12646098-.60305.08343-.1901.205412-.36081.358226-.50133l7.500003-7.07625.01031-.010313c.27613-.251125.63597-.3902803 1.00922-.3902803s.73308.1391553 1.00918.3902803c.0032.003669.0067.007114.0103.010313l7.5 7.07625c.1513.14126.2717.3123.3537.50237.082.19006.1237.39503.1226.60201z" />
              </svg>
              <h4>Overview</h4>
            </div>
          )}
        </NavLink>     
      <NavLink className={style.Link} to="/transaction"><img src="./images/icon-nav-transactions.svg" alt="" /> Transactions</NavLink>
      <NavLink className={style.Link} to="/budgets"><img src="./images/icon-nav-budgets.svg" alt="" /> Budgets</NavLink>
      <NavLink className={style.Link} to="/posts"><img src="./images/icon-nav-pots.svg" alt="" /> Pots</NavLink>
      <NavLink className={style.Link} to="/posts"><img src="./images/icon-nav-recurring-bills.svg" alt="" /> Recurring Bills</NavLink>
     </div>
     <div  className={style.sidbarBelow}>
      <NavLink to="/" className={style.LinkBelow}><img src="./images/icon-minimize-menu.svg" alt="" /> Minimize Menu</NavLink>
     </div>
    </div>
      </div>
  
  )
}

export default Sidebar