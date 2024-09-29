import React from 'react'
import SalesDashboradeAppHeader from './SalesDashboradeAppHeader'
import SalesDashboradeAppChart from './SalesDashboradeAppChart'
import SalesDashboradeAppFooter from './SalesDashboradeAppFooter'

const SalesDashboradeApp = () => {
  return (
    <>
      <div className="header">
        <SalesDashboradeAppHeader />
      </div>
      <div className="mainContent">
      <SalesDashboradeAppChart />
      </div>
      <div className="footer">
        <SalesDashboradeAppFooter />
      </div>
    </>
  )
}

export default SalesDashboradeApp